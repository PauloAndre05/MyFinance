interface ModalCriarTransacaoProps {
  isOpen: boolean;
}

export const ModalCriarTransacao = ({ isOpen }: ModalCriarTransacaoProps) => {
  return (
    <>
      {isOpen && (
        <div className="p-6 bg-white dark:bg-secondary mx-auto shadow-md flex flex-col gap-6 rounded-md">
          <h1 className="text-center font-semibold">Criar nova transação</h1>
          <form className="grid grid-cols-2 flex-wrap gap-4">
            <select className="w-65 outline-none border-b border-primary rounded-md p-2">
              <option
                className=""
              >
                Tipo de transação
              </option>
            </select>
             <select className="w-65 outline-none border-b border-primary rounded-md p-2">
              <option
                className=""
              >
                Categoria
              </option>
            </select>
            <div className="flex flex-col w-65">
              <input
                type="number"
                placeholder="Valor"
                min="0"
                className="outline-none border-b border-primary rounded-md w-full p-2"
              />
            </div>
            <div className="flex flex-col w-65">
              <input
                type="date"
                placeholder="Data"
                className="outline-none border-b border-primary rounded-md w-full p-2"
              />
            </div>
            <button type="submit" className="bg-primary dark:bg-secondary text-gray-100 py-2 rounded-b-md mt-4 cursor-pointer hover:bg-secondary transition-all duration-300 hover:rounded-md">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};
