import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useEditNodes } from "@/hooks/useEditNodes";
import { useSkillTree } from "@/hooks/useSkillTree";
import { Save, X } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";

interface EditNodeFormProps {
  id: string;
  closeForm: () => void;
}

interface Inputs {
  label: string;
}

const EditNodeForm = ({ id, closeForm }: EditNodeFormProps) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { mutate } = useEditNodes();
  const { data: tree } = useSkillTree();

  if (!tree) {
    return <p>Loading</p>;
  }

  const nodeToEdit = tree.nodes.find((node) => node.id === id);
  if (!nodeToEdit) {
    throw new Error(`Node with id ${id} not found`);
  }

  const label = nodeToEdit.data.label;

  if (typeof label !== "string") {
    throw new Error(`Node label is not a string`);
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const updatedNode = {
      ...nodeToEdit,
      data: { ...nodeToEdit.data, label: data.label },
    };
    const updatedNodes = tree.nodes.map((node) =>
      node.id === id ? updatedNode : node
    );
    mutate(updatedNodes);

    closeForm();
  };

  return (
    <form
      className="grid grid-cols-[auto_1fr] gap-4 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        aria-label="Set Node Title"
        defaultValue={label}
        required
        autoFocus
        {...register("label")}
      />
      <div className="flex items-center gap-1 justify-self-end">
        <Button
          type="submit"
          text={`Save changes to ${label}`}
          icon={Save}
          visuallyHideLabel
        />
        <Button
          onClick={closeForm}
          text={`Cancel changes to ${label}`}
          icon={X}
          visuallyHideLabel
        />
      </div>
    </form>
  );
};

export { EditNodeForm as EditNodeLabelForm };
