import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EditNodes } from "./EditNodes";

describe("<EditNodes/>", () => {
  it("should display nodes", () => {
    const screen = render(<EditNodes />);

    const renderedNodes = screen.getAllByRole("listitem");

    expect(renderedNodes).toHaveLength(2);
    expect(renderedNodes[0]).toHaveTextContent("Node 1");
    expect(renderedNodes[1]).toHaveTextContent("Node 2");
  });
});
