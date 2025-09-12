import type { ReactNode } from "react";
import { Nodes } from "@/containers/Nodes";

interface AppLayoutProps {
  children: ReactNode;
}

const Sidebar = () => {
  return (
    <div className="bg-zinc-950 px-6 py-8 flex flex-col gap-10">
      <header>
        <h1 className="text-3xl">Skill Tree Builder</h1>
        <p className="text-zinc-300">Build your skill tree</p>
      </header>
      <Nodes />
    </div>
  );
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="h-dvh w-dvw grid grid-cols-[20rem_auto] text-zinc-50">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export { AppLayout };
