import { useEffect, useState } from "react";

import { companyService } from "../../../mocks/services/companyService.mock";
import { countryService } from "../../../mocks/services/countryService.mock";
import { taxService } from "../../../mocks/services/taxService.mock";

import { Card } from "../../../components/ui/Card";
import { Loading } from "../../../components/ui/Loading";

export function DashboardPage() {
  const [companies, setCompanies] = useState<number | null>(null);
  const [countries, setCountries] = useState<number | null>(null);
  const [taxes, setTaxes] = useState<number | null>(null);

  useEffect(() => {
    companyService.getAll().then((data) => setCompanies(data.length));
    countryService.getAll().then((data) => setCountries(data.length));
    taxService.getAll().then((data) => setTaxes(data.length));
  }, []);

  if (companies === null || countries === null || taxes === null) {
    return <Loading />;
  }

  return (
    <>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
        <Card title="Empresas">{companies}</Card>
        <Card title="Países">{countries}</Card>
        <Card title="Impostos">{taxes}</Card>
      </div>
    </>
  );
}
