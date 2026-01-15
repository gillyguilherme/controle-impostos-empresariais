import { Card } from "../../../components/ui/Card";
import { Loading } from "../../../components/ui/Loading";
import { useTaxesSummary } from "../../../hooks/useTaxesSummary";
import { formatCurrency } from "../../../utils/currencyFormatter";

export function DashboardPage() {
  const summary = useTaxesSummary();

  if (!summary) {
    return <Loading />;
  }

  return (
    <>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
        <Card title="Empresas">
          {summary.totalCompanies}
        </Card>

        <Card title="Países">
          {summary.totalCountries}
        </Card>

        <Card title="Impostos Estimados">
          {formatCurrency(summary.estimatedTaxes)}
        </Card>
      </div>
    </>
  );
}
