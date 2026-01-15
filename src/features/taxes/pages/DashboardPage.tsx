import { useEffect, useState } from "react";
import { companyService } from "../../../mocks/services/companyService.mock";
import { countryService } from "../../../mocks/services/countryService.mock";
import { taxService } from "../../../mocks/services/taxService.mock";

export function DashboardPage() {
  const [companies, setCompanies] = useState<number>(0);
  const [countries, setCountries] = useState<number>(0);
  const [taxes, setTaxes] = useState<number>(0);

  useEffect(() => {
    companyService.getAll().then((data) => setCompanies(data.length));
    countryService.getAll().then((data) => setCountries(data.length));
    taxService.getAll().then((data) => setTaxes(data.length));
  }, []);

  return (
    <>
      <h2>Dashboard</h2>

      <section style={{ marginTop: "24px" }}>
        <ul>
          <li>Total de empresas: {companies}</li>
          <li>Países monitorados: {countries}</li>
          <li>Impostos registrados: {taxes}</li>
        </ul>
      </section>
    </>
  );
}
