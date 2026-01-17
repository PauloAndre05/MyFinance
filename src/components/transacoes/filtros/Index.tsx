import { format } from "date-fns"

interface FiltrosTransacoesProps {
  onSearch: (term: string) => void
}

export const FiltrosTransacoes = ({ onSearch }: FiltrosTransacoesProps) => {
  const date = new Date();
  const allmonths = Array.from({ length: 12 }, (_, i) => {
    const monthDate = new Date(date.getFullYear(), i, 1);
    return monthDate;
  })
  return (
    <div className="flex flex-wrap gap-5">

      <select className="border-b outline-0 rounded-md w-40 border-primary cursor-pointer text-sm" onChange={(e) => onSearch(e.target.value)}>
        <option value="" className="text-text-primary cursor-pointer w-full">
          Mês
        </option>
        {allmonths.map((month, index) => (
          <option value={format(month, "MM")} className="text-text-primary cursor-pointer w-full" key={index}>
            {format(new Date(month), "MMMM")}
          </option>
        ))}
      </select>

      <select name="" id="" className="border-b outline-0 rounded-md w-40 border-primary cursor-pointer text-sm" onChange={(e) => onSearch(e.target.value)}>
        <option value="" className="text-text-primary cursor-pointer w-full" >
          Selecione a Categoria
        </option>
        <option value="Alimentação" className="text-text-primary cursor-pointer w-full">
          Alimentação
        </option>
        <option value="Transporte" className="text-text-primary cursor-pointer w-full">
          Transporte
        </option>
      </select>

      <select name="" id="" className="border-b outline-0 rounded-md w-40 border-primary cursor-pointer text-sm" onChange={(e) => onSearch(e.target.value)}>
        <option value="" className="text-text-primary cursor-pointer w-full">
          Tipo de Transação
        </option>
        <option value="Receita" className="text-text-primary cursor-pointer w-full">
          Receita
        </option>
        <option value="Despesa" className="text-text-primary cursor-pointer w-full">
          Despesa
        </option>
      </select>
      <input className="border-b p-2 outline-0 rounded-md w-40 border-primary" placeholder="Pesquisar..." onChange={(e) => onSearch(e.target.value)} />
    </div>
  );
};
