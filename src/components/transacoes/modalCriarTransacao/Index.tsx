import { useForm } from "react-hook-form";

import {
  transationSchema,
  type TransactioFormData,
} from "../../../schemas/TransactionSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionService } from "../../../services/TransactionService";

interface ModalCriarTransacaoProps {
  isOpen: boolean;
  setIsOpen?: (value: boolean) => void;
}

export const ModalCriarTransacao = ({
  isOpen,
  setIsOpen,
}: ModalCriarTransacaoProps) => {

  function handleCloseModal() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

  const { register, handleSubmit } = useForm<TransactioFormData>({
    resolver: zodResolver(transationSchema),
  });

  function onSubmit(data: TransactioFormData) {
    const transaction = {
      id: crypto.randomUUID(),
      createdAt: new Date().toDateString(),
      ...data, 
    }
    TransactionService.create(transaction)
    
  }

  return (
    <>
      {isOpen && (
        <div
          className="absolute bg-black/10 dark:bg-black/50 inset-0 flex justify-center items-center backdrop-blur-[.5px] z-10"
          onClick={handleCloseModal}
        >
          <div
            className="p-6 bg-white dark:bg-crdBg-secondary border-primary shadow-md flex flex-col gap-6 rounded-md z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-center font-semibold">Criar nova transação</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-3 flex-wrap gap-4"
            >
              <div className="flex flex-col w-65">
                <input
                  type="text"
                  placeholder="Descrição"
                  min="0"
                  className="outline-none border-b border-primary w-full p-2"
                  {...register("descricao")}
                />
              </div>

              <select
                className="w-65 outline-none border-b border-primary p-2"
                {...register("tipo")}
              >
                <option className="" disabled>Tipo de transação</option>
                <option className="" value="Receita">
                  Receita
                </option>
                <option className="" value="Despesa">
                  Despesa
                </option>
              </select>

              <select
                className="w-65 outline-none border-b border-primary p-2"
                {...register("categoria")}
              >
                <option className="" disabled>Categoria</option>
                <option className="" value="Transporte">
                  Transporte
                </option>
              </select>

              <div className="flex flex-col w-65">
                <input
                  type="number"
                  step="0.01"
                  placeholder="Valor"
                  className="outline-none border-b border-primary w-full p-2"
                  {...register("valor", { valueAsNumber: true })}
                />
              </div>

              <div className="flex flex-col w-65">
                <input
                  type="date"
                  placeholder="Data"
                  className="outline-none border-b border-primary w-full p-2"
                  {...register("date")}
                />
              </div>

              <button
                type="submit"
                className="bg-primary dark:bg-secondary text-gray-100 py-2 rounded-b-md mt-4 cursor-pointer hover:bg-secondary transition-all duration-100 hover:rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};