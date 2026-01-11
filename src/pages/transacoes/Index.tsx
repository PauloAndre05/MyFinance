import { useEffect, useState } from "react";
import { FiltrosTransacoes } from "../../components/transacoes/filtros/Index";
import { HeaderTransacoes } from "../../components/transacoes/headerTransacoes/Index";
import { TabelaTransacoes } from "../../components/transacoes/tabelaTransacoes/Index";
import { ModalCriarTransacao } from "../../components/transacoes/modalCriarTransacao/Index";

export const Transacoes = () => {
  useEffect(() => {
    document.title = "MyFinance - Transações";
  }, []);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col gap-6">
        <HeaderTransacoes
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />

        <ModalCriarTransacao isOpen={isOpenModal} />
        {!isOpenModal && (
          <>
            <FiltrosTransacoes />
            <TabelaTransacoes />
          </>
        )}
      </div>
      {/*   <div className="flex flex-col gap-6 p-6">

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Transações</h1>
          <p className="text-sm text-muted-foreground">
            Março 2026 · 18 transações
          </p>
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          + Nova transação
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        <select className="border p-2 rounded-md">
          <option>Mês</option>
        </select>

        <select className="border p-2 rounded-md">
          <option>Categoria</option>
        </select>

        <select className="border p-2 rounded-md">
          <option>Tipo</option>
        </select>

        <input
          className="border p-2 rounded-md"
          placeholder="Pesquisar..."
        />
      </div>

      <div className="bg-white dark:bg-crdBg-secondary rounded-md border overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 dark:bg-crdBg-tertiary text-left">
            <tr>
              <th className="p-3">Data</th>
              <th className="p-3">Descrição</th>
              <th className="p-3">Categoria</th>
              <th className="p-3">Valor</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t">
              <td className="p-3">10/03</td>
              <td className="p-3">Supermercado</td>
              <td className="p-3">Alimentação</td>
              <td className="p-3 text-red-500">- € 43,20</td>
              <td className="p-3 text-right">•••</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> */}
    </>
  );
};
