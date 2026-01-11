import { dadosTransacoes } from "../../transacoes/dadosTransacoes";

export const TabelaTransacoes = () => {
  return (
      <table className="bg-white dark:bg-crdBg-secondary shadow-md rounded-md w-full overflow-y-auto">
        <thead className=" text-left text-sm">
          <tr>
            <th className="py-4  px-10 cursor-pointer">Descrição</th>
            <th className="py-4  px-10 cursor-pointer">Categoria</th>
            <th className="py-4  px-10 cursor-pointer">Valor</th>
            <th className="py-4  px-10 cursor-pointer">Data</th>
            <th className="py-4  px-10 cursor-pointer"></th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {dadosTransacoes.map((transacao) => {
            const valorClass =
              transacao.valor < 0 ? "text-red-500" : "text-green-500";
            return (
              <tr className={`shadow scale-100 hover:scale-y-120 ${transacao.id === dadosTransacoes.length ? "hover:shadow-none":""}`} key={transacao.id}>
                <td className="py-4  px-10 cursor-pointer">{transacao.descricao}</td>
                <td className="py-4  px-10 cursor-pointer">{transacao.categoria}</td>
                <td className={`py-4  px-10 cursor-pointer ${valorClass}`}>{transacao.valor}</td>
                <td className="py-4  px-10 cursor-pointer">{transacao.data}</td>
                <td className="py-4  px-10 cursor-pointer font-bold text-right">
                  •••
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};
