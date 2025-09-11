import { expect, describe, it } from "vitest";
import { render } from "@testing-library/react";
import { AppLayout } from "./AppLayout";

describe("<AppLayout/>", () => {
  it("should render children", () => {
    const screen = render(
      <AppLayout>
        <p>Hello World</p>
      </AppLayout>
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
