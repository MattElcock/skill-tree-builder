import { render } from "@/helpers/render";
import { describe, expect, it, vi } from "vitest";
import { SkillTree } from "./SkillTree";

vi.mock("@/hooks/useSkillTree", () => ({
  useSkillTree: vi.fn().mockReturnValue({
    data: {
      nodes: [
        {
          id: "n_pottery",
          data: { label: "Pottery" },
          position: { x: 0, y: 0 },
        },
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
    },
  }),
}));

describe("<SkillTree/>", () => {
  it("should render the tree", async () => {
    const screen = render(<SkillTree />);

    expect(screen.getByText("Pottery")).toBeInTheDocument();
    expect(screen.getByText("Irrigation")).toBeInTheDocument();
  });
});
