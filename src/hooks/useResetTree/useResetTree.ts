import { LOCAL_STORAGE_KEY } from "@/constants";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useResetTree = () => {
  const queryClient = useQueryClient();

  // mutationFn needs to be async to work with useMutation
  const mutationFn = async () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["skillTrees"] }),
  });
};

export { useResetTree };
