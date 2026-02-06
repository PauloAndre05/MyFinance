import { PiPencilLight } from "react-icons/pi";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import { ModalEliminar } from "../../shared/modalEliminar";
import type { Transacao } from "../../../types/Transaction";
import { EditarTransacaoModal } from "../../shared/editarTransacaoModal";
import { format } from "date-fns";

interface tabelaTransacoesProps {
  transacoes: Transacao[];
  getTransactionById: (id: string) => void;
  transactionFound: Transacao | undefined;
}

export const TabelaTransacoes = ({
  transacoes,
  getTransactionById,
  transactionFound,
}: tabelaTransacoesProps) => {
  const [isOpenModalEliminar, setIsOpenModalEliminar] =
    useState<boolean>(false);
  const [isOpenEditarModal, setIsOpenEditarModal] = useState<boolean>(false);

  function handleOpenModalEliminar() {
    setIsOpenModalEliminar(!isOpenModalEliminar);
  }
  function handleOpenEditarModal() {
    setIsOpenEditarModal(!isOpenEditarModal);
  }

  return (
    <>
      <table className="bg-white dark:bg-crdBg-secondary shadow-md rounded-md w-full overflow-y-auto">
        <thead className=" text-left text-sm">
          <tr>
            <th className="py-4  px-10 cursor-pointer">Data</th>
            <th className="py-4  px-10 cursor-pointer">Descrição</th>
            <th className="py-4  px-10 cursor-pointer">Tipo</th>
            <th className="py-4  px-10 cursor-pointer">Categoria</th>
            <th className="py-4  px-10 cursor-pointer">Valor</th>
            <th className="py-4  px-10 cursor-pointer text-right">Ações</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {transacoes.map((transacao) => {
            const valorTipo =
              transacao.tipo === "Despesa" ? "text-red-500" : "text-green-500"
            return (
              <tr className="shadow" key={transacao.id}>
                <td className="py-4  px-10 cursor-pointer">
                  {format(transacao.date, "dd-MM-yyyy")}
                </td>
                <td className="py-4  px-10 cursor-pointer">
                  {transacao.descricao}
                </td>
                <td className={`py-4  px-10 cursor-pointer ${valorTipo}`}>
                  {transacao.tipo}
                </td>
                <td className="py-4  px-10 cursor-pointer">
                  {transacao.categoria}
                </td>
                <td className={`py-4  px-10 cursor-pointer ${valorTipo}`}>
                  {transacao.tipo === "Despesa" ? `- ${transacao.valor}` : transacao.valor}
                </td>
                <td className="py-4  px-10 cursor-pointer font-bold text-right">
                  <button
                    className="p-1 mr-1 cursor-pointer"
                    onClick={() => {
                      handleOpenEditarModal();
                      getTransactionById(transacao.id);
                    }}
                  >
                    <PiPencilLight size={15} />
                  </button>
                  <button
                    className="p-1 cursor-pointer"
                    onClick={handleOpenModalEliminar}
                  >
                    <BsTrash3 size={15} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isOpenModalEliminar && (
        <ModalEliminar
          isOpen={isOpenModalEliminar}
          setIsOpen={setIsOpenModalEliminar}
          nomeAcao="Transação"
        />
      )}
      {isOpenEditarModal && (
        <EditarTransacaoModal
          isOpen={isOpenEditarModal}
          setIsOpen={setIsOpenEditarModal}
          dataTransactioEdit={transactionFound}
        />
      )}
    </>
  );
};
