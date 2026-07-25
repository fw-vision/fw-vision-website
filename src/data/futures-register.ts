import type { ForesightScopeData } from "@fw-vision/widgets";

/**
 * FW.VISION Futures Register, rendered for the ForesightScope tool.
 * Source of truth: 04_Execute/FW.VISION/context/futures-register.md
 *
 * Horizons map to H1 (5-10yr), H2 (10-20yr), H3 (30yr+).
 * Scenario bandIndex encodes Foresight Scope likelihood:
 *   0 = Probable (innermost), 1 = Plausible, 2 = Possible / Preferable (outer).
 */
export const fwVisionFutures: ForesightScopeData = {
  title: "FW.VISION Futures Register",
  description:
    "The futures within FW.VISION's range of concern, across food sovereignty, sovereign compute, climate tech, future of work, education, health, and deep tech. Classified by Foresight Scope likelihood and horizon.",
  presentDate: "2026-07-01",
  timeRange: { start: "2010-01-01", end: "2075-12-31" },
  coneLabels: {
    growth: "Preferable / Actualize",
    crisis: "Possible / Disruptive",
  },
  mainThread: [
    { id: "mt-01", date: "2022-11-01", label: "AI reaches mainstream", type: "inflection" },
    { id: "mt-02", date: "2024-01-01", label: "Skilled-talent drain to US accelerates", type: "crisis" },
    { id: "mt-03", date: "2026-07-01", label: "Present - decision window", type: "milestone" },
  ],
  presentCrossSection: {
    drivers: [
      { id: "d-tech", label: "Agentic AI and Hybrid Intelligence", category: "technological", position: "top" },
      { id: "d-econ", label: "Productivity at 71% of US level", category: "economic", position: "right" },
      { id: "d-pol", label: "Sovereignty and industrial policy", category: "political", position: "left" },
      { id: "d-soc", label: "Talent retention and social resilience", category: "social", position: "bottom" },
    ],
  },
  horizons: [
    { id: "h1", date: "2033-01-01", label: "H1 - Building now (5-10yr)", bands: 3, bandLabels: ["Probable", "Plausible", "Possible"] },
    { id: "h2", date: "2043-01-01", label: "H2 - Scaling (10-20yr)", bands: 3, bandLabels: ["Probable", "Plausible", "Preferable"] },
    { id: "h3", date: "2060-01-01", label: "H3 - Structural (30yr+)", bands: 3, bandLabels: ["Probable", "Plausible", "Preferable"] },
  ],
  scenarios: [
    // Sovereign compute
    { id: "s-compute-choke", label: "Compute as geopolitical chokepoint", description: "Compute access becomes a strategic chokepoint (Probable, H1).", horizonId: "h1", bandIndex: 0, angle: 20 },
    { id: "s-compute-reg", label: "Compute regulated like energy", description: "Compute becomes a regulated strategic resource (Plausible, H1).", horizonId: "h1", bandIndex: 1, angle: 40 },
    { id: "s-compute-sovereign", label: "Nationally-owned compute at scale", description: "Distributed, nationally-owned compute capacity (Preferable, H2). Anchor: DAICompute.", horizonId: "h2", bandIndex: 2, angle: 30 },
    // Food sovereignty
    { id: "s-food-parity", label: "CEA reaches cost parity", description: "Controlled-environment agriculture hits cost parity with imports (Plausible, H1).", horizonId: "h1", bandIndex: 1, angle: 80 },
    { id: "s-food-autarky", label: "Regional food autarky", description: "Climate disruption forces regional food autarky (Possible, H2).", horizonId: "h2", bandIndex: 1, angle: 95 },
    { id: "s-food-sovereign", label: "Staple-crop independence", description: "Canada closes staple-crop import dependency (Preferable, H2). Anchor: Iterra.", horizonId: "h2", bandIndex: 2, angle: 88 },
    // Climate tech
    { id: "s-climate-reprice", label: "Climate shocks reprice assets", description: "Climate shocks reprice every long-horizon asset (Probable, H2).", horizonId: "h2", bandIndex: 0, angle: 130 },
    { id: "s-climate-microgrid", label: "Regional energy sovereignty", description: "Micro-grids deliver regional energy sovereignty (Preferable, H2).", horizonId: "h2", bandIndex: 2, angle: 140 },
    // Future of work
    { id: "s-work-hcas", label: "Human-centric agentic scale default", description: "Human-centric, agentic scale becomes the default operating model (Plausible, H1).", horizonId: "h1", bandIndex: 1, angle: 180 },
    { id: "s-work-tens", label: "Companies of tens outperform thousands", description: "Small AI-native firms outperform large incumbents (Preferable, H1).", horizonId: "h1", bandIndex: 2, angle: 200 },
    { id: "s-work-reverse", label: "Talent drain reverses", description: "Skilled talent stays as domestic ventures become worth staying for (Preferable, H2).", horizonId: "h2", bandIndex: 2, angle: 210 },
    // Education
    { id: "s-edu-selfdet", label: "Self-determined AI learning", description: "AI-augmented, self-determined learning displaces credential-first models (Plausible, H2).", horizonId: "h2", bandIndex: 1, angle: 250 },
    // Health & femtech
    { id: "s-health-resilience", label: "Care shifts to resilience", description: "Longevity and preventative care shift from treatment to resilience (Plausible, H2).", horizonId: "h2", bandIndex: 1, angle: 290 },
    { id: "s-health-regen", label: "Regenerative wellness at scale", description: "Nature-based, regenerative wellness at population scale (Preferable, H3). Anchor: Arcadia.", horizonId: "h3", bandIndex: 2, angle: 300 },
    // Deep tech & robotics
    { id: "s-deep-mfg", label: "Advanced manufacturing rebuilds", description: "Domestic advanced-manufacturing capacity rebuilds (Plausible, H2).", horizonId: "h2", bandIndex: 1, angle: 330 },
    { id: "s-deep-sovereign", label: "Industrial sovereignty via robotics", description: "Robotics and automation restore industrial sovereignty (Preferable, H3).", horizonId: "h3", bandIndex: 2, angle: 340 },
  ],
};
