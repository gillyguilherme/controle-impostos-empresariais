export function StatCard({
  title,
  value,
  isMoney = false
}: {
  title: string;
  value: number | string;
  isMoney?: boolean;
}) {
  return (
    <div className="card stat-card">
      <div className="card-title">{title}</div>
      <div className="card-value">
        {isMoney ? new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(value)) : value}
      </div>
    </div>
  );
}
