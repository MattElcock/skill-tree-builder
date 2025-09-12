import { LOCAL_STORAGE_KEY } from "@/constants";
import { useSkillTree } from "@/hooks/useSkillTree";
import type { Node } from "@xyflow/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditNodes = () => {
  const { data: tree } = useSkillTree();
  const queryClient = useQueryClient();

  // mutationFn needs to be async to work with useMutation
  const mutationFn = async (updatedNodes: Node[]) => {
    if (!tree) {
      throw new Error("No skill tree found");
    }
    const updatedTree = { ...tree, nodes: updatedNodes };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([updatedTree]));
  };

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["skillTrees"] }),
  });
};

export { useEditNodes };
