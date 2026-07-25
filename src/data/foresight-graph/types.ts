/**
 * FW.VISION Foresight Graph - types.
 *
 * Storylines, scenarios, and drivers/signals are graph objects. The prose
 * (design fictions, descriptions) lives in the `storylines` and `scenarios`
 * content collections; the relationship structure lives here as a typed graph.
 *
 * This coded-JSON graph is the precursor to a PostgreSQL graph (see
 * 04_Execute/FW.VISION/context/trajectory-storylines.md, Section 5). Node and
 * edge shapes are kept database-friendly: flat records with string ids.
 */

export type Horizon = "H1" | "H1.5" | "H2" | "H2.5" | "H3" | "H3.5" | "H4";

/** Foresight Scope likelihood - the four P's. Preferable is NOT here (it is a trajectory). */
export type Likelihood = "probable" | "plausible" | "possible" | "preposterous";

/** APPETITE STEP driver categories. */
export type DriverCategory = "social" | "technological" | "economic" | "political";

/** Jim Dator's four trajectory archetypes. */
export type DatorTrajectory = "growth" | "collapse" | "transform" | "discipline";

export interface StorylineNode {
  kind: "storyline";
  id: string;
  slug: string;
  slogan: string;
  domainSeries: string[];
  horizons: Horizon[];
  status: "showcase" | "coming-soon";
  ambition: string;
}

export interface ScenarioNode {
  kind: "scenario";
  id: string;
  label: string;
  description: string;
  likelihood: Likelihood;
  horizon: Horizon;
  datorTrajectory?: DatorTrajectory;
  /** Angular placement on the horizon ring, degrees. Optional. */
  angle?: number;
}

export interface DriverNode {
  kind: "driver";
  id: string;
  label: string;
  category: DriverCategory;
}

export interface SignalNode {
  kind: "signal";
  id: string;
  label: string;
  date: string;
  source?: string;
}

export type ForesightNode = StorylineNode | ScenarioNode | DriverNode | SignalNode;

export type EdgeType =
  | "belongs-to" // scenario -> storyline
  | "sequence" // scenario -> scenario (ordered along a trajectory)
  | "driven-by" // scenario -> driver
  | "signals" // signal -> scenario
  | "offramps-into" // scenario -> failure scenario
  | "contributes-to"; // storyline -> meta storyline

export interface ForesightEdge {
  type: EdgeType;
  from: string;
  to: string;
  /** For "sequence" edges, which named trajectory this step belongs to. */
  trajectory?: string;
  /** For "offramps-into", the unaddressed constraint that causes the divergence. */
  constraint?: string;
}

export interface ForesightGraph {
  nodes: ForesightNode[];
  edges: ForesightEdge[];
}
