import { LOCAL_STORAGE_KEY } from "@/constants";
import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { initialSkillTree } from "./initialSkillTree";
import { useSkillTree } from "./useSkillTree";
import { QueryClientWrapper } from "@/helpers/queryClientWrapper";

describe("<Tree/>", () => {
  it("should create and return the initial tree if none exist", async () => {
    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBeNull();
    const hook = renderHook(() => useSkillTree(), {
      wrapper: QueryClientWrapper,
    });

    await waitFor(() => {
      expect(hook.result.current.data).toEqual(initialSkillTree);
      expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toEqual(
        JSON.stringify([initialSkillTree])
      );
    });
  });

  it("should return an existing tree from local storage", async () => {
    const existingTree = {
      id: "existing-tree",
      name: "Existing Tree",
      nodes: [],
      edges: [],
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([existingTree]));

    const hook = renderHook(() => useSkillTree(), {
      wrapper: QueryClientWrapper,
    });

    await waitFor(() => {
      expect(hook.result.current.data).toEqual(existingTree);
    });
  });
});
