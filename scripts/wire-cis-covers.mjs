import fs from "node:fs";
import path from "node:path";

const dir = "src/content/posts";
const alts = {
  "cis-patient-capital": "Flat illustration of layered capital horizons",
  "cis-summit-direction": "Flat illustration of radial direction from a center",
  "cis-meeting-transparency": "Flat illustration of overlapping transparent planes",
  "cis-trusted-partnership": "Flat illustration of interlocking frames",
  "cis-us-reliance": "Flat illustration of bridged columns",
  "cis-comparative-advantage": "Flat illustration of resource strata with accent vein",
  "cis-energy-superpower": "Flat illustration of an energy arc on a horizon",
  "cis-defence-industrial-strategy": "Flat illustration of a geometric shield and grid",
  "cis-airport-governance": "Flat illustration of converging runway lines",
  "cis-project-approvals": "Flat illustration of stacked approval gates",
  "cis-rbc-investor-interest": "Flat illustration of ascending capital steps",
};

for (const file of fs.readdirSync(dir).filter((f) => f.startsWith("2026-09-17-cis-") && f.endsWith(".md"))) {
  const cover = file.replace("2026-09-17-", "").replace(".md", "");
  const alt = alts[cover];
  if (!alt) {
    console.log("skip", file);
    continue;
  }
  const p = path.join(dir, file);
  let text = fs.readFileSync(p, "utf8");
  if (text.includes("images/blog/covers/")) {
    console.log("already", file);
    continue;
  }
  const block = `image:\n  url: "../../images/blog/covers/${cover}.png"\n  alt: "${alt}"\n`;
  text = text.replace(/^(description: .*\n)/m, `$1${block}`);
  fs.writeFileSync(p, text);
  console.log("wired", file);
}
