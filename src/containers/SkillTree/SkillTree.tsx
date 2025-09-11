import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useSkillTree } from "@/hooks/useSkillTree";

const SkillTree = () => {
  const { nodes, edges } = useSkillTree();

  return <ReactFlow colorMode="dark" nodes={nodes} edges={edges} fitView />;
};

export { SkillTree };
