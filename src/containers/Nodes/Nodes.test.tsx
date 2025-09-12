import { describe, expect, it } from "vitest";
import { Nodes } from "./Nodes";
import { render } from "@/helpers/render";
import { waitForElementToBeRemoved } from "@testing-library/dom";

describe("<Nodes/>", () => {
  it("should display nodes", async () => {
    const screen = render(<Nodes />);

    await waitForElementToBeRemoved(() => screen.getByText("Loading"));

    const renderedNodes = screen.getAllByRole("listitem");

    expect(renderedNodes).toHaveLength(2);
    expect(renderedNodes[0]).toHaveTextContent("Node 1");
    expect(renderedNodes[1]).toHaveTextContent("Node 2");
  });
});
