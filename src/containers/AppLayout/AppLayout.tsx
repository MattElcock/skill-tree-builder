import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

const Sidebar = () => {
  return (
    <div className="bg-zinc-950 px-6 py-8 flex flex-col gap-10">
      <header>
        <h1 className="text-3xl">Skill Tree Builder</h1>
      </header>
    </div>
  );
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="h-dvh w-dvw grid grid-cols-[20rem_auto] text-white">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export { AppLayout };
