import type { ForesightGraph } from "./types";

/**
 * FW.VISION Foresight Graph - data.
 * Source of truth: 04_Execute/FW.VISION/context/trajectory-storylines.md
 *
 * Sovereign Canada is fully populated as the showcase foresight storyline.
 * Public Canadian advocacy for the preferred 2080 path lives at Canada2080.org.
 * Other storylines are present as nodes (coming-soon) with minimal scenarios.
 */
export const foresightGraph: ForesightGraph = {
  nodes: [
    // ---- Storylines (top-level) ----
    {
      kind: "storyline",
      id: "sl-sovereign-canada",
      slug: "sovereign-canada",
      slogan: "Sovereign Canada",
      domainSeries: ["Future of Work", "Future of Industry", "Future of Energy"],
      horizons: ["H2", "H3"],
      status: "showcase",
      ambition:
        "Canada compounds energy, compute, production depth, and control rights into durable domestic capability toward late-century sovereignty. Public advocacy: Canada2080.",
    },
    { kind: "storyline", id: "sl-finding-singularity", slug: "finding-singularity", slogan: "Finding Singularity", domainSeries: ["Future of Health"], horizons: ["H3", "H4"], status: "coming-soon", ambition: "Precision and preventative health advancing toward biological immortality." },
    { kind: "storyline", id: "sl-living-planet", slug: "the-living-planet", slogan: "The Living Planet", domainSeries: ["Climate"], horizons: ["H2", "H3", "H4"], status: "coming-soon", ambition: "A regenerated, resilient planet, extending to terraforming and terrascaping." },
    { kind: "storyline", id: "sl-made-future", slug: "the-made-future", slogan: "The Made Future", domainSeries: ["Future of Industry"], horizons: ["H1", "H2", "H3"], status: "coming-soon", ambition: "Industry 4.0 and beyond: advanced manufacturing that rebuilds industrial capacity." },
    { kind: "storyline", id: "sl-first-principles", slug: "first-principles", slogan: "First Principles", domainSeries: ["Deep Tech"], horizons: ["H2", "H3", "H4"], status: "coming-soon", ambition: "Foundational, research-enabled technologies: nano-robotics, autonomous flight, and beyond." },
    { kind: "storyline", id: "sl-first-light", slug: "first-light", slogan: "First Light", domainSeries: ["Future of Energy", "Climate"], horizons: ["H3", "H4"], status: "coming-soon", ambition: "Humanity and Earth unified as a Kardashev Type 1 civilisation, harnessing the planet's full energy. Closest to the UN SDGs." },
    { kind: "storyline", id: "sl-second-light", slug: "second-light", slogan: "Second Light", domainSeries: ["Space"], horizons: ["H4"], status: "coming-soon", ambition: "A multi-planetary species reaching toward Kardashev Type 2: megastructures and stellar energy." },

    // ---- Sovereign Canada scenarios (preferred path) ----
    { kind: "scenario", id: "sc-sc-compute", label: "Sovereign compute stood up", description: "Distributed, nationally-owned compute capacity comes online, ending foreign dependency for strategic AI workloads.", likelihood: "plausible", horizon: "H1", datorTrajectory: "growth", angle: 30 },
    { kind: "scenario", id: "sc-sc-grid", label: "Resilient sovereign grid", description: "A resilient energy grid with storage and micro-grids underpins compute and industry. Globally replicable pattern.", likelihood: "plausible", horizon: "H1.5", datorTrajectory: "growth", angle: 55 },
    { kind: "scenario", id: "sc-sc-food", label: "Food independence reached", description: "Controlled-environment agriculture closes staple-crop import dependency. Globally replicable.", likelihood: "plausible", horizon: "H2", datorTrajectory: "growth", angle: 80 },
    { kind: "scenario", id: "sc-sc-industry", label: "Industry 4.0+ capacity rebuilt", description: "Domestic advanced manufacturing and robotics rebuild industrial capacity and exports.", likelihood: "plausible", horizon: "H2", datorTrajectory: "transform", angle: 40 },
    { kind: "scenario", id: "sc-sc-talent", label: "Opportunity structure holds talent", description: "Skilled people stay, return, or circulate when domestic ventures and missions create ambitious roles — not when education volume alone rises.", likelihood: "possible", horizon: "H2", datorTrajectory: "transform", angle: 20 },
    { kind: "scenario", id: "sc-sc-leader", label: "Trusted contribution", description: "Canada exercises selective strategic choice with public value, resilience, and reinvestment — measured as capability, not unqualified ranking.", likelihood: "possible", horizon: "H3", datorTrajectory: "transform", angle: 35 },

    // ---- Sovereign Canada off-ramp (failure path) ----
    { kind: "scenario", id: "sc-sc-dependency", label: "Continued dependency", description: "Talent, compute, and IP stay foreign-controlled; sovereignty is nominal. The trajectory collapses into managed decline.", likelihood: "probable", horizon: "H2", datorTrajectory: "discipline", angle: 130 },
    { kind: "scenario", id: "sc-sc-hollowing", label: "Industrial hollowing", description: "Without patient capital, the 50-year build never funds; industry hollows out further.", likelihood: "plausible", horizon: "H3", datorTrajectory: "collapse", angle: 150 },

    // ---- Drivers (STEP) ----
    { kind: "driver", id: "dr-ai", label: "Agentic AI and Hybrid Intelligence", category: "technological" },
    { kind: "driver", id: "dr-prod", label: "Productivity at 71% of US level", category: "economic" },
    { kind: "driver", id: "dr-sovereignty", label: "Sovereignty and industrial policy", category: "political" },
    { kind: "driver", id: "dr-talent", label: "Skilled-talent retention", category: "social" },
    { kind: "driver", id: "dr-capital", label: "Patient / strategic capital", category: "economic" },

    // ---- Signals ----
    { kind: "signal", id: "sig-ai-mainstream", label: "AI reaches mainstream", date: "2022-11-01", source: "market" },
    { kind: "signal", id: "sig-tn-drain", label: "1.2M TN entries to US, FY2023", date: "2024-01-01", source: "US DHS" },
  ],

  edges: [
    // Sovereign Canada: scenario membership
    { type: "belongs-to", from: "sc-sc-compute", to: "sl-sovereign-canada" },
    { type: "belongs-to", from: "sc-sc-grid", to: "sl-sovereign-canada" },
    { type: "belongs-to", from: "sc-sc-food", to: "sl-sovereign-canada" },
    { type: "belongs-to", from: "sc-sc-industry", to: "sl-sovereign-canada" },
    { type: "belongs-to", from: "sc-sc-talent", to: "sl-sovereign-canada" },
    { type: "belongs-to", from: "sc-sc-leader", to: "sl-sovereign-canada" },
    { type: "belongs-to", from: "sc-sc-dependency", to: "sl-sovereign-canada" },
    { type: "belongs-to", from: "sc-sc-hollowing", to: "sl-sovereign-canada" },

    // Preferred trajectory sequence
    { type: "sequence", from: "sc-sc-compute", to: "sc-sc-grid", trajectory: "preferred" },
    { type: "sequence", from: "sc-sc-grid", to: "sc-sc-industry", trajectory: "preferred" },
    { type: "sequence", from: "sc-sc-industry", to: "sc-sc-talent", trajectory: "preferred" },
    { type: "sequence", from: "sc-sc-talent", to: "sc-sc-leader", trajectory: "preferred" },

    // Off-ramp: if talent retention fails, divert into dependency -> hollowing
    { type: "offramps-into", from: "sc-sc-talent", to: "sc-sc-dependency", constraint: "Talent drain continues; skilled workers keep leaving." },
    { type: "sequence", from: "sc-sc-dependency", to: "sc-sc-hollowing", trajectory: "offramp" },

    // Drivers
    { type: "driven-by", from: "sc-sc-compute", to: "dr-ai" },
    { type: "driven-by", from: "sc-sc-compute", to: "dr-sovereignty" },
    { type: "driven-by", from: "sc-sc-talent", to: "dr-talent" },
    { type: "driven-by", from: "sc-sc-leader", to: "dr-prod" },
    { type: "driven-by", from: "sc-sc-hollowing", to: "dr-capital" },

    // Signals
    { type: "signals", from: "sig-ai-mainstream", to: "sc-sc-compute" },
    { type: "signals", from: "sig-tn-drain", to: "sc-sc-talent" },

    // Laddering to meta-trajectories
    { type: "contributes-to", from: "sl-sovereign-canada", to: "sl-first-light" },
    { type: "contributes-to", from: "sl-living-planet", to: "sl-first-light" },
    { type: "contributes-to", from: "sl-first-light", to: "sl-second-light" },
  ],
};
