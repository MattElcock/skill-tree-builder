import { Button } from "@/components/Button";
import { useAddNode } from "@/hooks/useAddNode";
import { Plus } from "lucide-react";

const AddNode = () => {
  const { mutate } = useAddNode();

  const handleAddNode = () => {
    mutate();
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
