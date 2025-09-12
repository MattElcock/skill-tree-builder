import { LOCAL_STORAGE_KEY } from "@/constants";
import { useSkillTree } from "@/hooks/useSkillTree";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

const useAddNode = () => {
  const { data: tree } = useSkillTree();
  const queryClient = useQueryClient();

  if (!tree) {
    throw new Error("No skill tree found");
  }

  // mutationFn needs to be async to work with useMutation
  const mutationFn = async () => {
    const nodeId = uuidv4();
    const updatedTree = {
      ...tree,
      nodes: [
        ...tree.nodes,
        {
          id: nodeId,
          position: { x: -100, y: -100 },
          data: { label: "Node 1" },
        },
      ],
    };

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([updatedTree]));
  };

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["skillTrees"] }),
  });
};

export { useAddNode };
