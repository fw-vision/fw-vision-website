# CBC Canada Investment Summit Import Manifest

This file contains curated factual updates from the CBC Canada Investment Summit source.
Each entry represents one substantive update that has been editorially reviewed for relevance.

## Field Definitions

- `sourceUrl`: Canonical source URL
- `publisher`: Source publisher (e.g., 'CBC News')
- `sourceTitle`: Original headline/title from source
- `sourcePublishedAt`: Original publication date (ISO format)
- `sourceUpdatedAt`: Most recent source update (ISO format)
- `sourceUpdateKey`: Optional stable source identifier when available
- `facts`: Array of verified factual statements (editorial intake notes)
- `sourceRightsStatus`: Rights review status ('link-only', 'fair-dealing-quote', etc.)
- `proposedRelationshipIds`: Optional suggestions for graph relationships

## Editorial Process

1. Review source material and extract substantive facts
2. Add entry to manifest with accurate metadata
3. Run import script to generate draft Signal files
4. Human editor reviews drafts, adds interpretation, and approves for publication

## Reconciliation for the September 15 live thread

The launch corpus records every substantive update supplied for review:

| Source update | Public signal |
|---|---|
| Closing direction, investment target, productivity deduction, sovereign internet, and airport capital | `2026-09-17-cis-summit-direction.md` |
| Airport investment and governance-model comments | `2026-09-17-cis-airport-governance.md` |
| Project authorisation roadblocks | `2026-09-17-cis-project-approvals.md` |
| Defence industrial strategy | `2026-09-17-cis-defence-industrial-strategy.md` |
| Trusted partnership as an advantage | `2026-09-17-cis-trusted-partnership.md` |
| Energy-superpower argument | `2026-09-17-cis-energy-superpower.md` |
| Resources, rule of law, and environmental standards | `2026-09-17-cis-comparative-advantage.md` |
| Reduced reliance on the United States | `2026-09-17-cis-us-reliance.md` |
| Closed investor meetings and transparency | `2026-09-17-cis-meeting-transparency.md` |
| RBC investor-interest signal | `2026-09-17-cis-rbc-investor-interest.md` |

No substantive supplied update was excluded. Repeated airport statements were merged into one signal to prevent duplication.
