import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useSkillTree } from "@/hooks/useSkillTree";

const SkillTree = () => {
  const { data: tree } = useSkillTree();

  if (!tree) {
    return <p>Loading</p>;
  }

  const { nodes, edges } = tree;

  return <ReactFlow colorMode="dark" nodes={nodes} edges={edges} fitView />;
};

export { SkillTree };
