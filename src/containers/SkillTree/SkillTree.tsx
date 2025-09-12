import { useEditEdges } from "@/hooks/useEditEdges";
import { useEditNodes } from "@/hooks/useEditNodes";
import { useSkillTree } from "@/hooks/useSkillTree";
import {
  addEdge,
  applyNodeChanges,
  ReactFlow,
  type OnConnect,
  type OnNodesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const SkillTree = () => {
  const { data: tree } = useSkillTree();
  const { mutate: editNodes } = useEditNodes();
  const { mutate: editEdges } = useEditEdges();

  if (!tree) {
    return <p>Loading</p>;
  }

  const { nodes, edges } = tree;

  const onNodesChange: OnNodesChange = (changes) => {
    editNodes(applyNodeChanges(changes, nodes));
  };

  const onConnect: OnConnect = (connection) => {
    editEdges(addEdge(connection, edges));
  };

  return (
    <ReactFlow
      colorMode="dark"
      nodes={nodes}
      edges={edges}
      fitView
      onNodesChange={onNodesChange}
      onConnect={onConnect}
    />
  );
};

export { SkillTree };
