import { StatCard } from "./StatCard";

export function KPISection({ stats }: any) {
  return (
    <div className="grid-cards large">
      <StatCard title="Empresas Ativas" value={stats.companies} />
      <StatCard title="Impostos Registrados" value={stats.taxes} />
      <StatCard title="Países Monitorados" value={stats.countries} />
      <StatCard title="Total Tributado" value={stats.totalTax} isMoney />
    </div>
  );
}
