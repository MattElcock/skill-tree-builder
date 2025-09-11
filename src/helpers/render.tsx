import { render as rtlRender } from "@testing-library/react";
import type { ReactNode } from "react";
import { QueryClientWrapper } from "./queryClientWrapper";

const render = (children: ReactNode) => {
  return rtlRender(children, { wrapper: QueryClientWrapper });
};

export { render };
