import "./styles/variables.css";
import "./styles/global.css";
import "./styles/layout.css";

import { MainLayout } from "./components/layout/MainLayout";
import { DashboardPage } from "./features/taxes/pages/DashboardPage";

function App() {
  return (
    <MainLayout>
      <DashboardPage />
    </MainLayout>
  );
}

export default App;
