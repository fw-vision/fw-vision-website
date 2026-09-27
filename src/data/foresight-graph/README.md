# Foresight Graph - data layer

The FW.VISION foresight data is a **graph**: storylines, scenarios, drivers (STEP), and signals as nodes, connected by typed edges. The prose (design fictions, descriptions, alternatives) lives in the `storylines` and `scenarios` content collections as essays; the **relationship structure lives here** as typed coded-JSON.

Canonical source of truth for the model: `04_Execute/FW.VISION/context/trajectory-storylines.md` (in the Perceptiosphere vault).

## Files

- `types.ts` - node and edge type definitions (Horizon, Likelihood/4 P's, DriverCategory/STEP, DatorTrajectory, edge types).
- `graph.ts` - the graph data. Sovereign Canada is fully populated; other storylines are coming-soon nodes.
- `derive.ts` - `foresightDataForStoryline(id)` builds `ForesightScopeData` (for the `@fw-vision/widgets` ForesightScope) from the graph.

## Node types

`storyline`, `scenario`, `driver` (social / technological / economic / political), `signal`, plus `horizon` as an attribute on scenarios.

## Edge types

- `belongs-to` - scenario → storyline
- `sequence` - scenario → scenario (ordered along a named trajectory: preferred or offramp)
- `driven-by` - scenario → driver
- `signals` - signal → scenario
- `offramps-into` - scenario → failure scenario (carries the unaddressed `constraint`)
- `contributes-to` - storyline → meta-storyline (e.g. Sovereign Canada → First Light)

## PostgreSQL migration path (deferred)

When volume and query needs justify it, this graph migrates to Postgres. The JSON shapes are already database-friendly (flat records, string ids). Suggested schema:

```sql
-- nodes
create table foresight_node (
  id text primary key,
  kind text not null,          -- storyline | scenario | driver | signal
  data jsonb not null          -- the type-specific fields
);
-- edges
create table foresight_edge (
  id bigserial primary key,
  type text not null,          -- belongs-to | sequence | driven-by | signals | offramps-into | contributes-to
  from_id text not null references foresight_node(id),
  to_id text not null references foresight_node(id),
  trajectory text,             -- for sequence edges
  constraint_note text         -- for offramps-into edges
);
create index on foresight_edge (from_id);
create index on foresight_edge (to_id);
create index on foresight_edge (type);
```

The derivation logic in `derive.ts` becomes a set of SQL queries (or a thin service). The ForesightScope datasets are then generated server-side or at build time from the database instead of the static graph.

Until then, edit `graph.ts` directly. Adding a scenario = one node + a `belongs-to` edge (+ optional `sequence`, `driven-by`, `signals`).
