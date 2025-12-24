import { useEffect } from "react";
import { Saldo } from "../../components/saldo/Index";
import { Receitas } from "../../components/receitas/Index";
import { Despesas } from "../../components/despesas/Index";

export const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - MyFinance";
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <Saldo />
        <Receitas />
        <Despesas />
      </div>
      <div></div>
    </div>
  );
};
