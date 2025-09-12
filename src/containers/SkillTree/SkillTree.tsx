import { useEditNodes } from "@/hooks/useEditNodes";
import { useSkillTree } from "@/hooks/useSkillTree";
import { applyNodeChanges, ReactFlow, type OnNodesChange } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const SkillTree = () => {
  const { data: tree } = useSkillTree();
  const { mutate } = useEditNodes();

  if (!tree) {
    return <p>Loading</p>;
  }

  const { nodes, edges } = tree;

  const onNodesChange: OnNodesChange = (changes) => {
    mutate(applyNodeChanges(changes, nodes));
  };

  return (
    <ReactFlow
      colorMode="dark"
      nodes={nodes}
      edges={edges}
      fitView
      onNodesChange={onNodesChange}
    />
  );
};

export { SkillTree };
