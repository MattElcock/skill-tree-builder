import "@xyflow/react/dist/style.css";
import { AppLayout } from "@/containers/AppLayout";
import { SkillTree } from "@/containers/SkillTree";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <SkillTree />
      </AppLayout>
      <ToastContainer />
    </QueryClientProvider>
  );
}
