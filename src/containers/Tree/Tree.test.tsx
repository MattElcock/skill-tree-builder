import { expect, describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import { Tree } from "./Tree";

vi.mock("@/hooks/useSkillTree", () => ({
  useSkillTree: vi.fn().mockReturnValue({
    nodes: [
      { id: "n_pottery", data: { label: "Pottery" }, position: { x: 0, y: 0 } },
      {
        id: "n_irrigation",
        data: { label: "Irrigation" },
        position: { x: 100, y: 100 },
      },
    ],
    edges: [
      {
        id: "e_pottery-irrigation",
        source: "n_pottery",
        target: "n_irrigation",
      },
    ],
  }),
}));

describe("<Tree/>", () => {
  it("should render the tree", () => {
    const screen = render(<Tree />);

    expect(screen.getByText("Pottery")).toBeInTheDocument();
    expect(screen.getByText("Irrigation")).toBeInTheDocument();
  });
});
