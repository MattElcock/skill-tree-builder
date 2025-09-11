import "@xyflow/react/dist/style.css";
import { AppLayout } from "@/containers/AppLayout";
import { Tree } from "@/containers/Tree";

export default function App() {
  return (
    <AppLayout>
      <Tree />
    </AppLayout>
  );
}
