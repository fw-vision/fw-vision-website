// Graph Validation and Derivation Utilities
import { foresightGraph } from "./graph";
import type { ForesightGraph, ForesightNode, ForesightEdge, StorylineNode, ScenarioNode } from "./types";
import { getCollection } from "astro:content";
import { projects } from "../projects";

export async function validateGraph(): Promise<string[]> {
  const errors: string[] = [];
  
  // Check for duplicate IDs
  const idCount = new Map<string, number>();
  foresightGraph.nodes.forEach(node => {
    idCount.set(node.id, (idCount.get(node.id) || 0) + 1);
  });
  
  for (const [id, count] of idCount) {
    if (count > 1) {
      errors.push(`Duplicate node ID: ${id} appears ${count} times`);
    }
  }
  
  // Check that edge references exist
  foresightGraph.edges.forEach(edge => {
    const fromNode = foresightGraph.nodes.find(n => n.id === edge.from);
    const toNode = foresightGraph.nodes.find(n => n.id === edge.to);
    
    if (!fromNode) errors.push(`Edge references non-existent source node: ${edge.from}`);
    if (!toNode) errors.push(`Edge references non-existent target node: ${edge.to}`);
  });
  
  return errors;
}

export async function derivePublishedSignals(): Promise<Map<string, any>> {
  // This will be implemented to derive signal nodes from published posts
  // For now, returning empty map as we need to implement the content first
  return new Map();
}

export async function validateContentRelationships() {
  // Validate that referenced IDs exist in graph and projects registries
  return []; // Placeholder implementation
}