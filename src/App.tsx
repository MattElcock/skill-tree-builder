import "@xyflow/react/dist/style.css";
import { AppLayout } from "@/containers/AppLayout";
import { SkillTree } from "@/containers/SkillTree";

export default function App() {
  return (
    <AppLayout>
      <SkillTree />
    </AppLayout>
  );
}
