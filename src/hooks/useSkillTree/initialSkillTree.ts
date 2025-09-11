import type { Node, Edge } from "@xyflow/react";
import type { SkillTree } from "./types";

const initialNodes: Node[] = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];

const initialEdges: Edge[] = [
  {
    id: "n1-n2",
    source: "n1",
    target: "n2",
    domAttributes: { "aria-description": "Hello world" },
  },
];

export const initialSkillTree: SkillTree = {
  id: "skilltree-1",
  name: "My First Tree",
  nodes: initialNodes,
  edges: initialEdges,
};
