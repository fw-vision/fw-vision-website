/**
 * Generate flat futuristic cover PNGs for CIS signals + patient-capital commentary.
 * Uses SVG → sharp PNG. Palette: burgundy + slate.
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const W = 1600;
const H = 1067; // ~12:8
const OUT = join(process.cwd(), "src/images/blog/covers");

const BG = "#1a1a2e";
const SLATE = "#2a2a3a";
const MUTED = "#4a5568";
const ACCENT = "#7A1F2B";
const ACCENT_LIGHT = "#a33a48";
const STEEL = "#5a6a7a";

function svgShell(inner) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  ${inner}
</svg>`;
}

const covers = {
  "cis-patient-capital": svgShell(`
    <rect x="120" y="280" width="1360" height="48" rx="4" fill="${SLATE}"/>
    <rect x="120" y="380" width="1100" height="36" rx="4" fill="${MUTED}"/>
    <rect x="120" y="460" width="900" height="28" rx="4" fill="${STEEL}"/>
    <rect x="120" y="530" width="700" height="20" rx="4" fill="${SLATE}"/>
    <circle cx="1420" cy="304" r="28" fill="${ACCENT}"/>
    <line x1="120" y1="720" x2="1480" y2="720" stroke="${STEEL}" stroke-width="2" opacity="0.4"/>
  `),

  "cis-summit-direction": svgShell(`
    <circle cx="800" cy="520" r="18" fill="${ACCENT}"/>
    ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
      .map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const len = i % 3 === 0 ? 380 : 260;
        const x2 = 800 + Math.cos(rad) * len;
        const y2 = 520 + Math.sin(rad) * len;
        return `<line x1="800" y1="520" x2="${x2}" y2="${y2}" stroke="${i % 2 ? ACCENT_LIGHT : STEEL}" stroke-width="${i % 3 === 0 ? 4 : 2}" opacity="0.85"/>`;
      })
      .join("")}
  `),

  "cis-meeting-transparency": svgShell(`
    <rect x="280" y="220" width="520" height="520" fill="${SLATE}" opacity="0.9"/>
    <rect x="480" y="280" width="520" height="520" fill="${STEEL}" opacity="0.45"/>
    <rect x="680" y="340" width="520" height="520" fill="${ACCENT}" opacity="0.35"/>
    <rect x="380" y="320" width="200" height="8" fill="${ACCENT_LIGHT}"/>
  `),

  "cis-trusted-partnership": svgShell(`
    <rect x="320" y="280" width="420" height="420" rx="8" fill="none" stroke="${STEEL}" stroke-width="24"/>
    <rect x="860" y="360" width="420" height="420" rx="8" fill="none" stroke="${MUTED}" stroke-width="24"/>
    <rect x="700" y="480" width="200" height="80" rx="6" fill="${ACCENT}"/>
  `),

  "cis-us-reliance": svgShell(`
    <rect x="360" y="180" width="120" height="700" rx="4" fill="${SLATE}"/>
    <rect x="1120" y="180" width="120" height="700" rx="4" fill="${MUTED}"/>
    <path d="M480 420 Q800 280 1120 480" fill="none" stroke="${ACCENT}" stroke-width="28" stroke-linecap="round"/>
  `),

  "cis-comparative-advantage": svgShell(`
    <rect x="160" y="720" width="1280" height="100" fill="${SLATE}"/>
    <rect x="160" y="580" width="1280" height="100" fill="${MUTED}"/>
    <rect x="160" y="440" width="1280" height="100" fill="${STEEL}"/>
    <rect x="160" y="300" width="1280" height="100" fill="${SLATE}"/>
    <rect x="480" y="300" width="80" height="520" fill="${ACCENT}"/>
  `),

  "cis-energy-superpower": svgShell(`
    <path d="M120 680 Q500 200 800 480 T1480 320" fill="none" stroke="${ACCENT}" stroke-width="36" stroke-linecap="round"/>
    <line x1="120" y1="780" x2="1480" y2="780" stroke="${STEEL}" stroke-width="3" opacity="0.5"/>
    <circle cx="800" cy="480" r="22" fill="${ACCENT_LIGHT}"/>
  `),

  "cis-defence-industrial-strategy": svgShell(`
    <polygon points="800,180 1180,420 1040,860 560,860 420,420" fill="${SLATE}" stroke="${STEEL}" stroke-width="8"/>
    <g stroke="${MUTED}" stroke-width="2" opacity="0.7">
      ${[320, 400, 480, 560, 640, 720]
        .map((y) => `<line x1="480" y1="${y}" x2="1120" y2="${y}"/>`)
        .join("")}
      ${[560, 640, 720, 800, 880, 960]
        .map((x) => `<line x1="${x}" y1="280" x2="${x}" y2="780"/>`)
        .join("")}
    </g>
    <polygon points="800,300 980,440 900,680 700,680 620,440" fill="${ACCENT}" opacity="0.85"/>
  `),

  "cis-airport-governance": svgShell(`
    <polygon points="800,200 1480,900 120,900" fill="none" stroke="${STEEL}" stroke-width="6"/>
    <line x1="800" y1="200" x2="800" y2="900" stroke="${MUTED}" stroke-width="4"/>
    <line x1="400" y1="700" x2="1200" y2="700" stroke="${STEEL}" stroke-width="3" opacity="0.6"/>
    <line x1="500" y1="550" x2="1100" y2="550" stroke="${STEEL}" stroke-width="3" opacity="0.5"/>
    <circle cx="800" cy="380" r="36" fill="${ACCENT}"/>
  `),

  "cis-project-approvals": svgShell(`
    <rect x="280" y="200" width="1040" height="120" rx="8" fill="${SLATE}"/>
    <rect x="280" y="380" width="1040" height="120" rx="8" fill="${MUTED}"/>
    <rect x="280" y="560" width="1040" height="120" rx="8" fill="${ACCENT}"/>
    <rect x="280" y="740" width="1040" height="120" rx="8" fill="${STEEL}" opacity="0.5"/>
    <circle cx="360" cy="620" r="28" fill="${ACCENT_LIGHT}"/>
  `),

  "cis-rbc-investor-interest": svgShell(`
    <rect x="280" y="720" width="200" height="160" fill="${SLATE}"/>
    <rect x="520" y="560" width="200" height="320" fill="${MUTED}"/>
    <rect x="760" y="400" width="200" height="480" fill="${STEEL}"/>
    <rect x="1000" y="220" width="200" height="660" fill="${ACCENT}"/>
    <polygon points="1100,160 1180,220 1020,220" fill="${ACCENT_LIGHT}"/>
  `),
};

await mkdir(OUT, { recursive: true });

for (const [slug, svg] of Object.entries(covers)) {
  const dest = join(OUT, `${slug}.png`);
  await sharp(Buffer.from(svg)).png().toFile(dest);
  console.log("wrote", dest);
}

console.log(`Done: ${Object.keys(covers).length} covers`);
