import { expect, describe, test } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App/>", () => {
  test("nodes exist", () => {
    const screen = render(<App />);

    expect(screen.getByText("Node 1")).toBeInTheDocument();
    expect(screen.getByText("Node 2")).toBeInTheDocument();
  });
});
