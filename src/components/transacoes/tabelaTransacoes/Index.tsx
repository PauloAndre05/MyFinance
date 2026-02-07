import { PiPencilLight } from "react-icons/pi";
import { BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import { ModalEliminar } from "../../shared/modalEliminar";
import type { Transaction } from "../../../types/Transaction";
import { EditarTransacaoModal } from "../../shared/editarTransacaoModal";
import { format } from "date-fns";
import { LiaEuroSignSolid } from "react-icons/lia";

interface tableTransactionsProp {
  transactions: Transaction[];
  getTransactionById: (id: string) => void;
  transactionFound?: Transaction;
}

export const TableTransactions = ({
  transactions,
  getTransactionById,
  transactionFound,
}: tableTransactionsProp) => {
  const [isOpenModalEliminar, setIsOpenModalEliminar] = useState(false);
  const [isOpenEditarModal, setIsOpenEditarModal] = useState(false);

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
            <th className="py-4  px-10 cursor-pointer">Date</th>
            <th className="py-4  px-10 cursor-pointer">Description</th>
            <th className="py-4  px-10 cursor-pointer">Type</th>
            <th className="py-4  px-10 cursor-pointer">Category</th>
            <th className="py-4  px-10 cursor-pointer">Amount</th>
            <th className="py-4  px-10 cursor-pointer text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {transactions.map((transaction) => {
            const typevalue = transaction.type === "expense"
            return (
              <tr className="shadow" key={transaction.id}>
                <td className="py-4  px-10 cursor-pointer">
                  {format(transaction.date, "dd-MM-yyyy")}
                </td>
                <td className="py-4  px-10 cursor-pointer">
                  {transaction.description}
                </td>
                <td className={`py-4  px-10 cursor-pointer ${typevalue ? "text-red-400" : "text-green-400"}`}>
                  {transaction.type}
                </td>
                <td className="py-4  px-10 cursor-pointer">
                  {transaction.category}
                </td>
                <td className={`py-4  px-10 cursor-pointer flex items-center gap-1 text-right ${typevalue ? "text-red-400" : "text-green-400" }`}>
                  {typevalue && <span>-</span>}
                  <div className="flex items-center">
                    <LiaEuroSignSolid size={14} />
                    {transaction.amount}
                  </div>
                </td>
                <td className="py-4  px-10 cursor-pointer font-bold text-right">
                  <button
                    className="p-1 mr-1 cursor-pointer"
                    onClick={() => {
                      handleOpenEditarModal();
                      getTransactionById(transaction.id);
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
