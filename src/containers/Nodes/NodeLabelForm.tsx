import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { useEditNode } from "@/hooks/useEditNode";
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
  const { mutate } = useEditNode(id);
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
    mutate(data.label);
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
