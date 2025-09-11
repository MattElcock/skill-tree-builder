import { useSkillTree } from "@/hooks/useSkillTree";

const EditNodes = () => {
  const { nodes } = useSkillTree();

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Nodes</h2>
      <ul className="flex flex-col gap-2">
        {nodes.map((node) => {
          const { label } = node.data;

          if (typeof label !== "string") {
            console.error("Node label is not a string", JSON.stringify(node));
            throw new Error("Node label is not a string");
          }

          return <li key={node.id}>{label}</li>;
        })}
      </ul>
    </div>
  );
};

export { EditNodes };
