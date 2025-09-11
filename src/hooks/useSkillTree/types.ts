import type { Edge, Node } from "@xyflow/react";

export interface SkillTree {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
}
