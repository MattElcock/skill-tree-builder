import { Button } from "@/components/Button";
import { useEditNodes } from "@/hooks/useEditNodes";
import { useSkillTree } from "@/hooks/useSkillTree";
import { Plus } from "lucide-react";
import { v4 as uuidv4 } from "uuid";

const AddNode = () => {
  const { data: tree } = useSkillTree();
  const { mutate } = useEditNodes();

  const handleAddNode = () => {
    if (!tree) {
      throw new Error("No skill tree found");
    }
    mutate([
      ...tree.nodes,
      {
        id: uuidv4(),
        position: { x: -100, y: -100 },
        data: { label: "New Node" },
      },
    ]);
  };

  return (
    <Button
      icon={Plus}
      text="Add skill"
      visuallyHideLabel
      onClick={handleAddNode}
    />
  );
};

export { AddNode };
