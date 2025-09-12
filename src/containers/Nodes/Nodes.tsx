import { Button } from "@/components/Button";
import { useSkillTree } from "@/hooks/useSkillTree";
import type { Node } from "@xyflow/react";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { EditNodeLabelForm } from "./NodeLabelForm";
import { AddNode } from "./AddNode";

interface NodeProps {
  node: Node;
}

const Node = ({ node }: NodeProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const { label } = node.data;

  if (typeof label !== "string") {
    console.error("Node label is not a string", JSON.stringify(node));
    throw new Error("Node label is not a string");
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <li key={node.id}>
      {isEditing ? (
        <EditNodeLabelForm id={node.id} closeForm={handleCancel} />
      ) : (
        <div className="flex items-center justify-between">
          {label}
          <Button
            onClick={handleEdit}
            text={`Edit ${label}`}
            icon={Pencil}
            visuallyHideLabel
          />
        </div>
      )}
    </li>
  );
};

const Nodes = () => {
  const { data: tree } = useSkillTree();

  if (!tree) {
    return <p>Loading</p>;
  }

  const { nodes } = tree;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl">Nodes</h2>
        <AddNode />
      </div>

      <ul className="flex flex-col gap-2">
        {nodes.map((node) => (
          <Node key={node.id} node={node} />
        ))}
      </ul>
    </div>
  );
};

export { Nodes };
