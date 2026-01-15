import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";

import { DashboardPage } from "../features/taxes/pages/DashboardPage";
import { CompaniesPage } from "../features/companies/pages/CompaniesPage";
import { TaxesPage } from "../features/taxes/pages/TaxesPage";
import { CountriesPage } from "../../features/countries/pages/CountriesPage";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/taxes" element={<TaxesPage />} />
          <Route path="/countries" element={<CountriesPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
