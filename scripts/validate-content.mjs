import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const postsDir = join(root, "src", "content", "posts");
const graphText = await readFile(join(root, "src", "data", "foresight-graph", "graph.ts"), "utf8");
const projectText = await readFile(join(root, "src", "data", "projects.ts"), "utf8");
const knownGraphIds = new Set([...graphText.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]));
const knownProjectIds = new Set([...projectText.matchAll(/id:\s*["']([^"']+)["']/g)].map((match) => match[1]));
const files = (await readdir(postsDir)).filter((name) => /\.mdx?$/.test(name));
const records = [];
const errors = [];

function scalar(frontmatter, key) {
  return frontmatter.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)`, "m"))?.[1]?.trim();
}

function array(frontmatter, key) {
  const value = frontmatter.match(new RegExp(`^${key}:\\s*\\[([^\\]]*)\\]`, "m"))?.[1] ?? "";
  return [...value.matchAll(/["']([^"']+)["']/g)].map((match) => match[1]);
}

for (const file of files) {
  const text = await readFile(join(postsDir, file), "utf8");
  const frontmatter = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  const record = {
    file,
    contentType: scalar(frontmatter, "contentType") ?? "analysis",
    status: scalar(frontmatter, "editorialStatus") ?? "draft",
    stableId: scalar(frontmatter, "stableId"),
    updateId: scalar(frontmatter, "updateId"),
    author: scalar(frontmatter, "author"),
    approval: scalar(frontmatter, "editorialApprovalRef"),
    driverIds: array(frontmatter, "driverIds"),
    scenarioIds: array(frontmatter, "scenarioIds"),
    storylineIds: array(frontmatter, "storylineIds"),
    projectIds: array(frontmatter, "projectIds"),
    relatedSignalIds: array(frontmatter, "relatedSignalIds"),
    frontmatter,
  };
  records.push(record);
  if (record.status === "published" && (!record.stableId || !record.approval)) errors.push(`${file}: published records require stableId and editorialApprovalRef`);
  if (record.contentType === "signal") {
    if (!record.updateId || !/sourceRecords:\s*\n\s*-\s+publisher:/m.test(frontmatter)) errors.push(`${file}: signals require updateId and sourceRecords`);
    if (/status:\s*["']permission-required["']/.test(frontmatter)) errors.push(`${file}: permission-required content cannot publish`);
  }
  if (record.contentType === "column" && record.author !== "francis-wang") errors.push(`${file}: columns require the Francis Wang byline`);
  for (const id of [...record.driverIds, ...record.scenarioIds, ...record.storylineIds]) if (!knownGraphIds.has(id)) errors.push(`${file}: unknown graph id ${id}`);
  for (const id of record.projectIds) if (!knownProjectIds.has(id)) errors.push(`${file}: unknown public project id ${id}`);
}

for (const field of ["stableId", "updateId"]) {
  const seen = new Set();
  for (const record of records) {
    const value = record[field];
    if (!value) continue;
    if (seen.has(value)) errors.push(`duplicate ${field}: ${value}`);
    seen.add(value);
  }
}
const signalIds = new Set(records.filter((record) => record.contentType === "signal").map((record) => record.stableId));
for (const record of records) for (const id of record.relatedSignalIds) if (!signalIds.has(id)) errors.push(`${record.file}: unknown related signal ${id}`);
if (/from:\s*"([^"]+)"\s*,\s*to:\s*"\1"/.test(graphText)) errors.push("foresight graph contains a self-loop");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Validated ${records.length} publications, including ${signalIds.size} signals.`);
