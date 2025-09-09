import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

test("<App/>", () => {
  const screen = render(<App />);

  expect(screen.getByText("Hello world")).toBeInTheDocument();
});
