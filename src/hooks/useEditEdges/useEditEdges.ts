import { LOCAL_STORAGE_KEY } from "@/constants";
import { useSkillTree } from "@/hooks/useSkillTree";
import type { SkillTree } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Edge } from "@xyflow/react";

const useEditEdges = () => {
  const { data: tree } = useSkillTree();
  const queryClient = useQueryClient();

  // mutationFn needs to be async to work with useMutation
  const mutationFn = async (updatedEdges: Edge[]) => {
    if (!tree) {
      throw new Error("No skill tree found");
    }

    const updatedTree: SkillTree = { ...tree, edges: updatedEdges };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([updatedTree]));
  };

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["skillTrees"] }),
  });
};

export { useEditEdges };
