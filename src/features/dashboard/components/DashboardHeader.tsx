import { useState } from "react";

export function DashboardHeader() {
  const [period, setPeriod] = useState("Últimos 30 dias");

  return (
    <div className="dashboard-header">
      <h2>Dashboard Fiscal</h2>

      <div className="filters">
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option>Hoje</option>
          <option>Últimos 7 dias</option>
          <option>Últimos 30 dias</option>
          <option>Últimos 90 dias</option>
        </select>
      </div>
    </div>
  );
}
