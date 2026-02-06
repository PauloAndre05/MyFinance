
import { useForm } from "react-hook-form";

import type { Transacao } from "../../types/Transaction";
import { format } from "date-fns";
import type { TransactioFormData } from "../../schemas/TransactionSchema";
import { TransactionService } from "../../services/TransactionService";

interface EditarTransacaoModalProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  dataTransactioEdit: Transacao | undefined;
}

export const EditarTransacaoModal = ({
  isOpen,
  setIsOpen,
  dataTransactioEdit,
}: EditarTransacaoModalProps) => {
  
  function handleCloseModal() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

  if (!dataTransactioEdit) {
    return null;
  }

  const date = new Date(dataTransactioEdit.date);

 const {register, handleSubmit} = useForm<TransactioFormData>({
    defaultValues:{
      categoria: dataTransactioEdit.categoria,
      descricao: dataTransactioEdit.descricao,
      tipo: dataTransactioEdit.tipo,
      date: format(date, "yyyy-MM-dd"),
      valor: dataTransactioEdit.valor
    }
 })

 function handleUpdateTransaction (data: TransactioFormData) {
  const newTransaction = {
    createdAt: new Date().toDateString(),
    ...data
  }
  TransactionService.update(dataTransactioEdit.id, newTransaction)
  handleCloseModal()
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
                  {...register("descricao")}
                />

                <select
                  id="tipo"
                  className="border-b p-2 outline-0 w-40 border-primary"
                  {...register("tipo")}
                >
                  <option value="Despesa">Despesa</option>
                  <option value="Receita">Receita</option>
                </select>

                <select
                  id="categoria"
                  className="border-b p-2 outline-0 w-40 border-primary"
                  {...register("categoria")}
                >
                  <option value="Despesa">Alimentação</option>
                  <option value="Receita">Transporte</option>
                  <option value="Receita">Renda</option>
                  <option value="Receita">Lazer</option>
                </select>

                <input
                  className="border-b p-2 outline-0 w-40 border-primary"
                  type="number"
                  placeholder=""
                  {...register("valor", { valueAsNumber: true })}
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
