import { ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useSkillTree } from "@/hooks/useSkillTree";

const Tree = () => {
  const { nodes, edges } = useSkillTree();

  return <ReactFlow colorMode="dark" nodes={nodes} edges={edges} fitView />;
};

export { Tree };
