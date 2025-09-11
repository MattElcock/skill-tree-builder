import { LOCAL_STORAGE_KEY } from "@/constants";
import type { Edge, Node } from "@xyflow/react";
import { initialSkillTree } from "./initialSkillTree";
import { useQuery } from "@tanstack/react-query";

interface SkillTree {
  id: string;
  name: string;
  nodes: Node[];
  edges: Edge[];
}

const getTreesFromLocalStorage = (): SkillTree[] => {
  const trees = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (trees) {
    return JSON.parse(trees);
  }
  return [];
};

const useSkillTree = () => {
  const queryFn = () => {
    let trees = getTreesFromLocalStorage();

    /*
     * Initialise local storage with a default skill tree if none exists. I've
     * set it in an array to avoid migrations later if this were to support
     * multiple trees.
     */
    if (trees.length === 0) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([initialSkillTree])
      );

      trees = getTreesFromLocalStorage();
    }

    /*
     * If this was a real app, you'd probably have a feature where you could select
     * which tree you wanted to work on. For this exercise, I'm just returning
     * the first tree in the list to narrow the scope a bit.
     */

    return trees[0];
  };

  return useQuery({
    queryKey: ["skillTrees"],
    queryFn,
  });
};

export { useSkillTree };
