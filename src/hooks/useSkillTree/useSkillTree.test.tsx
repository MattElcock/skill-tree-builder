import { LOCAL_STORAGE_KEY } from "@/constants";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { initialSkillTree } from "./initialSkillTree";
import { useSkillTree } from "./useSkillTree";

describe("<Tree/>", () => {
  it("should create and return the initial tree if none exist", () => {
    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBeNull();
    const hook = renderHook(() => useSkillTree());

    expect(hook.result.current).toEqual(initialSkillTree);
    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toEqual(
      JSON.stringify([initialSkillTree])
    );
  });

  it("should return an existing tree from local storage", () => {
    const existingTree = {
      id: "existing-tree",
      name: "Existing Tree",
      nodes: [],
      edges: [],
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([existingTree]));

    const hook = renderHook(() => useSkillTree());
    expect(hook.result.current).toEqual(existingTree);
  });
});
