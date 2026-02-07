import { useEffect } from "react";
import { Saldo } from "../../components/dashboard/saldo/Index";
import { Receitas } from "../../components/dashboard/receitas/Index";
import { Despesas } from "../../components/dashboard/despesas/Index";
import { DespesasPorCategoriaChart } from "../../components/dashboard/despesasPorCategoriaChart.tsx/Index";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - MyFinance";
  }, []);

  const data = [
  { category: "Alimentação", total: 250 },
  { category: "Transporte", total: 40 },
  { category: "Renda", total: 275 },
  { category: "Lazer", total: 200 },
];
  return (
    <div className="flex flex-col gap-6 max-h-full">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 flex-wrap">
        <Saldo />
        <Receitas />
        <Despesas />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 flex-wrap">
        <DespesasPorCategoriaChart data={data} />
        <div className="bg-white dark:bg-crdBg-secondary rounded-md p-6 shadow-md font-semibold sm:col-span-2 text-2xl">Em construção</div>
      </div>
    </div>
  );
};
