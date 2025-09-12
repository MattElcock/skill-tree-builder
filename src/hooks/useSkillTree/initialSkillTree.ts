import type { SkillTree } from "@/types";
import { type Node, type Edge, MarkerType } from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";

const initialNodes: Node[] = [
  { id: uuidv4(), position: { x: 0, y: 0 }, data: { label: "Shipbuilding" } },
  { id: uuidv4(), position: { x: 0, y: 100 }, data: { label: "Cartography" } },
];

const initialEdges: Edge[] = [
  {
    id: uuidv4(),
    source: initialNodes[0].id,
    target: initialNodes[1].id,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

export const initialSkillTree: SkillTree = {
  id: uuidv4(),
  name: "My First Tree",
  nodes: initialNodes,
  edges: initialEdges,
};
