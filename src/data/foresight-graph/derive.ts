import type { ForesightScopeData } from "@fw-vision/widgets";
import { foresightGraph } from "./graph";
import type { Horizon, Likelihood, ScenarioNode, StorylineNode } from "./types";

/** Likelihood -> band index. 0 = innermost (Probable) ... 3 = outer (Preposterous). */
const LIKELIHOOD_BAND: Record<Likelihood, number> = {
  probable: 0,
  plausible: 1,
  possible: 2,
  preposterous: 3,
};

const BAND_LABELS = ["Probable", "Plausible", "Possible", "Preposterous"];

/** Horizons of Concern -> approximate calendar dates for the cone (present = 2026). */
const HORIZON_DATE: Record<Horizon, string> = {
  H1: "2033-01-01",
  "H1.5": "2038-01-01",
  H2: "2046-01-01",
  "H2.5": "2054-01-01",
  H3: "2062-01-01",
  "H3.5": "2080-01-01",
  H4: "2126-01-01",
};

const HORIZON_LABEL: Record<Horizon, string> = {
  H1: "H1 (3-10yr)",
  "H1.5": "H1.5",
  H2: "H2 (10-30yr)",
  "H2.5": "H2.5",
  H3: "H3 (30-50yr)",
  "H3.5": "H3.5",
  H4: "H4 (100yr+)",
};

/**
 * Build ForesightScopeData for a single storyline from the graph.
 * Renders scenarios on horizon rings by likelihood, and the storyline's
 * preferred + off-ramp trajectories as named polylines.
 */
export function foresightDataForStoryline(storylineId: string): ForesightScopeData | null {
  const storyline = foresightGraph.nodes.find(
    (n): n is StorylineNode => n.kind === "storyline" && n.id === storylineId
  );
  if (!storyline) return null;

  const scenarioIds = new Set(
    foresightGraph.edges
      .filter((e) => e.type === "belongs-to" && e.to === storylineId)
      .map((e) => e.from)
  );
  const scenarios = foresightGraph.nodes.filter(
    (n): n is ScenarioNode => n.kind === "scenario" && scenarioIds.has(n.id)
  );

  // Horizons actually used by this storyline's scenarios, sorted by date.
  const usedHorizons = Array.from(new Set(scenarios.map((s) => s.horizon))).sort(
    (a, b) => new Date(HORIZON_DATE[a]).getTime() - new Date(HORIZON_DATE[b]).getTime()
  );

  const horizons = usedHorizons.map((h) => ({
    id: h,
    date: HORIZON_DATE[h],
    label: HORIZON_LABEL[h],
    bands: 4,
    bandLabels: BAND_LABELS,
  }));

  const scenarioData = scenarios.map((s) => ({
    id: s.id,
    label: s.label,
    description: s.description,
    horizonId: s.horizon,
    bandIndex: LIKELIHOOD_BAND[s.likelihood],
    angle: s.angle,
  }));

  // Trajectories: group sequence edges by trajectory name into ordered chains.
  const seqEdges = foresightGraph.edges.filter(
    (e) => e.type === "sequence" && scenarioIds.has(e.from) && scenarioIds.has(e.to)
  );
  const trajNames = Array.from(new Set(seqEdges.map((e) => e.trajectory ?? "preferred")));

  const trajectories = trajNames.map((name) => {
    const edges = seqEdges.filter((e) => (e.trajectory ?? "preferred") === name);
    // Order the chain: find the start (a `from` that is never a `to`).
    const tos = new Set(edges.map((e) => e.to));
    const start = edges.find((e) => !tos.has(e.from))?.from ?? edges[0]?.from;
    const seq: string[] = [];
    let cur: string | undefined = start;
    const guard = new Set<string>();
    while (cur && !guard.has(cur)) {
      seq.push(cur);
      guard.add(cur);
      cur = edges.find((e) => e.from === cur)?.to;
    }
    return {
      id: name,
      label: name === "preferred" ? "Preferred trajectory" : "Off-ramp",
      scenarioSequence: seq,
      kind: (name === "preferred" ? "preferred" : "offramp") as "preferred" | "offramp",
    };
  });

  return {
    title: storyline.slogan,
    description: storyline.ambition,
    presentDate: "2026-07-01",
    timeRange: { start: "2016-01-01", end: HORIZON_DATE[usedHorizons[usedHorizons.length - 1]] ?? "2075-12-31" },
    coneLabels: { growth: "Preferred trajectory", crisis: "Off-ramp / failure" },
    mainThread: [
      { id: "mt-ai", date: "2022-11-01", label: "AI reaches mainstream", type: "inflection" },
      { id: "mt-now", date: "2026-07-01", label: "Present", type: "milestone" },
    ],
    presentCrossSection: {
      drivers: [
        { id: "pd-tech", label: "Agentic AI and Hybrid Intelligence", category: "technological", position: "top" },
        { id: "pd-econ", label: "Productivity at 71% of US level", category: "economic", position: "right" },
        { id: "pd-pol", label: "Sovereignty and industrial policy", category: "political", position: "left" },
        { id: "pd-soc", label: "Talent retention", category: "social", position: "bottom" },
      ],
    },
    horizons,
    scenarios: scenarioData,
  };
}
