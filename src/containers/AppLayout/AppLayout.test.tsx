import { expect, describe, it } from "vitest";
import { AppLayout } from "./AppLayout";
import { render } from "@/helpers/render";

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
