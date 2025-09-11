import { LOCAL_STORAGE_KEY } from "@/constants";
import { useSkillTree } from "@/hooks/useSkillTree";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useEditNode = (id: string) => {
  const { data: tree } = useSkillTree();
  const queryClient = useQueryClient();

  if (!tree) {
    throw new Error("No skill tree found");
  }

  // mutationFn needs to be async to work with useMutation
  const mutationFn = async (newLabel: string) => {
    const updatedNodes = tree.nodes.map((node) =>
      node.id === id
        ? { ...node, data: { ...node.data, label: newLabel } }
        : node
    );

    const updatedTree = { ...tree, nodes: updatedNodes };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([updatedTree]));
  };

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["skillTrees"] }),
  });
};

export { useEditNode };
