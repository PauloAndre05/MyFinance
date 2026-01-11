export const FiltrosTransacoes = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <select className="border-b outline-0 rounded-md w-40 border-primary cursor-pointer">
        <option value="" className="text-text-primary cursor-pointer w-full">
          Mês
        </option>
      </select>
      <select name="" id="" className="border-b outline-0 rounded-md w-40 border-primary cursor-pointer">
        <option value="" className="text-text-primary cursor-pointer w-full">
          Categotia
        </option>
      </select>
      <select name="" id="" className="border-b outline-0 rounded-md w-40 border-primary cursor-pointer">
        <option value="" className="text-text-primary cursor-pointer w-full">
          Tipo
        </option>
      </select>
      <input className="border-b p-2 outline-0 rounded-md w-40 border-primary" placeholder="Pesquisar..." />
    </div>
  );
};
