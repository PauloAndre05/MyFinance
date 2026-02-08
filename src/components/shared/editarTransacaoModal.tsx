import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { Transaction } from "../../types/Transaction";
import { format } from "date-fns";
import {
  transationSchema,
  type TransactioFormData,
} from "../../schemas/TransactionSchema";
import { TransactionService } from "../../services/TransactionService";

interface EditarTransacaoModalProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  dataTransactioEdit?: Transaction;
  onUpdate: (id: string, data: Transaction) => void;
}

export const EditarTransacaoModal = ({
  isOpen,
  setIsOpen,
  dataTransactioEdit,
  onUpdate
}: EditarTransacaoModalProps) => {
  function handleCloseModal() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

  if (!dataTransactioEdit) return null;

  const transaction = dataTransactioEdit;

  const date = new Date(transaction.date);

  const { register, handleSubmit } = useForm<TransactioFormData>({
    resolver: zodResolver(transationSchema),
    defaultValues: {
      category: transaction.category,
      description: transaction.description,
      type: transaction.type,
      date: format(date, "yyyy-MM-dd"),
      amount: transaction.amount,
    },
  });

    function handleUpdateTransaction(data: Transaction) {
    onUpdate(transaction.id, data)
    handleCloseModal();
  }

  return (
    <>
      {isOpen && (
        <div className="absolute bg-black/30 dark:bg-black/80 inset-0 flex justify-center items-center backdrop-blur-[.5px] z-10">
          <div
            className="p-6 bg-white dark:bg-crdBg-secondary shadow-md flex flex-col gap-6 justify-center z-50 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="font-semibold text-center">Editar transação</h1>

            {/* FORMULÁRIO DE EDIÇÃO */}

            <form
              className="text-sm flex flex-col gap-4"
              onSubmit={handleSubmit(handleUpdateTransaction)}
            >
              <div className="grid grid-cols-5 gap-3 items-stretch">
                <input
                  className="border-b p-2 outline-0 w-40 border-primary"
                  type="date"
                  {...register("date")}
                />

                <input
                  className="border-b p-2 outline-0 w-40 border-primary"
                  type="text"
                  {...register("description")}
                />

                <select
                  id="tipo"
                  className="border-b p-2 outline-0 w-40 border-primary"
                  {...register("type")}
                >
                  <option value="income">Despesa</option>
                  <option value="expense">Receita</option>
                </select>

                <select
                  id="categoria"
                  className="border-b p-2 outline-0 w-40 border-primary"
                  {...register("category")}
                >
                  <option value="alimentation">Alimentação</option>
                  <option value="transport">Transporte</option>
                  <option value="rent">Renda</option>
                  <option value="leisure">Lazer</option>
                </select>

                <input
                  className="border-b p-2 outline-0 w-40 border-primary"
                  type="number"
                  placeholder=""
                  {...register("amount", { valueAsNumber: true })}
                />
              </div>
              <div className="flex gap-2 items-center justify-end">
                <button
                  className=" bg-gray-500 text-gray-100 mt-2  cursor-pointer hover:bg-gray-600 transition-all duration-300 hover border w-40 rounded-md p-2"
                  type="submit"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className=" bg-red-500 text-gray-100 mt-2  cursor-pointer hover:bg-gray-600 transition-all duration-300 hover border w-40 rounded-md p-2"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
