import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

export interface UpdateManifestEntry {
  sourceUrl: string;
  sourcePublishedAt: string;
  sourceUpdateKey: string;
  sourceTitle: string;
  publisher: string;
  facts: string[];
}

export function normalizeSourceUrl(value: string): string {
  const url = new URL(value);
  url.hash = "";
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_|fbclid|gclid)/i.test(key)) url.searchParams.delete(key);
  }
  url.pathname = url.pathname.replace(/\/+$/, "");
  return url.toString();
}

export function updateIdFor(entry: UpdateManifestEntry): string {
  const key = [normalizeSourceUrl(entry.sourceUrl), entry.sourcePublishedAt, entry.sourceUpdateKey].join("|");
  return `cbc-cis:${createHash("sha256").update(key).digest("hex").slice(0, 20)}`;
}

async function main() {
  const inputPath = join(process.cwd(), "data", "imports", "cbc-investment-summit", "updates.json");
  const entries = JSON.parse(await readFile(inputPath, "utf8")) as UpdateManifestEntry[];
  const report = entries.map((entry) => ({ sourceUpdateKey: entry.sourceUpdateKey, updateId: updateIdFor(entry), facts: entry.facts.length }));
  const outputPath = join(process.cwd(), "data", "imports", "cbc-investment-summit", "reconciliation.generated.json");
  await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(`Reconciled ${entries.length} update records to ${basename(outputPath)}.`);
}

if (import.meta.main) await main();
