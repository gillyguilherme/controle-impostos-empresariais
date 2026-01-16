import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const evolution = [
  { date: "01/01", value: 120000 },
  { date: "01/02", value: 134000 },
  { date: "01/03", value: 142000 },
];

const distribution = [
  { name: "Brasil", value: 480000 },
  { name: "EUA", value: 320000 },
  { name: "Alemanha", value: 260000 },
];

export function ChartsSection() {
  return (
    <div className="charts-section">
      <div className="chart-card">
        <h3>Evolução de Tributos</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={evolution}>
            <XAxis dataKey="date" />
            <CartesianGrid stroke="#eee" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#7f1d1d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-card">
        <h3>Distribuição por País</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={distribution}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" fill="#991b1b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
