// FW.VISION Project Registry
// Public-facing projects, programmes, tools, and ventures

export interface ProjectRegistryEntry {
  id: string;
  label: string;
  description: string;
  status: "active" | "planned" | "completed" | "private";
  url?: string;
  launchDate?: string;
}

export const projects: ProjectRegistryEntry[] = [
  // Will be populated by Moderator team after editorial review
  // Keeping placeholder structure for now
];

export function getProjectById(id: string): ProjectRegistryEntry | undefined {
  return projects.find(p => p.id === id);
}
