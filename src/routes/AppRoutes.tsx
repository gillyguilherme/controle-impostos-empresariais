import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { DashboardPage } from "../features/taxes/pages/DashboardPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
