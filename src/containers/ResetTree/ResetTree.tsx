import { Button } from "@/components/Button";
import { useResetTree } from "@/hooks/useResetTree";

const ResetTree = () => {
  const { mutate } = useResetTree();
  const handleResetTree = () => {
    mutate();
  };

  return <Button variant="solid" text="Reset Tree" onClick={handleResetTree} />;
};

export { ResetTree };
