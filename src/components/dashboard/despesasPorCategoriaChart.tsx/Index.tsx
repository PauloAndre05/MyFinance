import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
  data: {
    category: string;
    total: number;
  }[];
}

export const DespesasPorCategoriaChart = ({ data }: Props) => {
  const CATEGORY_COLORS: Record<string, string> = {
    Alimentação: "#22c55e",
    Transporte: "#3b82f6",
    Renda: "#ef4444",
    Lazer: "#f59e0b",
    Outros: "#8b5cf6",
  };
  return (
    <div className="bg-white dark:bg-crdBg-secondary rounded-md p-6 shadow-sm h-80 ">
      <h2 className="font-semibold mb-4">
        Despesas por categoria
      </h2>

      <ResponsiveContainer width="100%" height="100%" >
        <PieChart className="-top-6">
          <Pie
            data={data}
            dataKey="total"
            nameKey="category"
            innerRadius={55}
            outerRadius={100}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={CATEGORY_COLORS[entry.category] || "#71717a"}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value?: number) => {
              if (typeof value !== "number") return "€ 0,00";
              return `€ ${value.toFixed(2)}`;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
