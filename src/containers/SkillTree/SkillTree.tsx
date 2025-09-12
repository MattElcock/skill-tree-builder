import { useEditEdges } from "@/hooks/useEditEdges";
import { useEditNodes } from "@/hooks/useEditNodes";
import { useSkillTree } from "@/hooks/useSkillTree";
import {
  addEdge,
  applyNodeChanges,
  getOutgoers,
  MarkerType,
  ReactFlow,
  ReactFlowProvider,
  useReactFlow,
  type Connection,
  type Edge,
  type Node,
  type OnConnect,
  type OnNodesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";

const UnwrappedSkillTree = () => {
  const { data: tree } = useSkillTree();
  const { mutate: editNodes } = useEditNodes();
  const { mutate: editEdges } = useEditEdges();
  const { getNodes, getEdges } = useReactFlow();

  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (typeof error === "string") {
      toast.error(error, {
        theme: "colored",
        transition: Slide,
        onClose: () => setError(undefined),
      });
    }
  }, [error]);

  // See https://reactflow.dev/examples/interaction/prevent-cycles
  const isValidConnection = useCallback(
    (connection: Connection | Edge) => {
      const nodes = getNodes();
      const edges = getEdges();
      const target = nodes.find((node) => node.id === connection.target);

      if (!target) {
        throw new Error();
      }

      const hasCycle = (node: Node, visited = new Set()) => {
        if (visited.has(node.id)) return false;

        visited.add(node.id);

        for (const outgoer of getOutgoers(node, nodes, edges)) {
          if (outgoer.id === connection.source) return true;
          if (hasCycle(outgoer, visited)) return true;
        }
      };

      if (target.id === connection.source) return false;

      if (hasCycle(target)) {
        setError(
          "Whoops! That connection would create a cycle, which isn’t allowed."
        );
        return false;
      } else {
        return true;
      }
    },
    [getNodes, getEdges]
  );

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => {
      editNodes(applyNodeChanges(changes, getNodes()));
    },
    [editNodes, getNodes]
  );

  const onConnect: OnConnect = useCallback(
    (connection) => {
      editEdges(
        addEdge(
          {
            ...connection,
            markerEnd: { type: MarkerType.ArrowClosed },
          },
          getEdges()
        )
      );
    },
    [editEdges, getEdges]
  );

  if (!tree) {
    return <p>Loading</p>;
  }

  const { nodes, edges } = tree;

  return (
    <ReactFlow
      colorMode="dark"
      nodes={nodes}
      edges={edges}
      fitView
      onNodesChange={onNodesChange}
      onConnect={onConnect}
      isValidConnection={isValidConnection}
    />
  );
};

const SkillTree = () => {
  return (
    <ReactFlowProvider>
      <UnwrappedSkillTree />
    </ReactFlowProvider>
  );
};

export { SkillTree };
