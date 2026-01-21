interface ModalCriarTransacaoProps {
  isOpen: boolean;
  setIsOpen?: (value: boolean) => void;
}

export const ModalCriarTransacao = ({ isOpen, setIsOpen }: ModalCriarTransacaoProps) => {
  function handleCloseModal() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div className="absolute bg-black/10 dark:bg-black/50 inset-0 flex justify-center items-center backdrop-blur-[.5px] z-10" onClick={handleCloseModal}>
          <div className="p-6 bg-white dark:bg-crdBg-secondary border-primary shadow-md flex flex-col gap-6 rounded-md z-50"  onClick={(e) => e.stopPropagation()}>
            <h1 className="text-center font-semibold">Criar nova transação</h1>
            <form className="grid grid-cols-2 flex-wrap gap-4">
              <select className="w-65 outline-none border-b border-primary p-2">
                <option
                  className=""
                >
                  Tipo de transação
                </option>
              </select>
               <select className="w-65 outline-none border-b border-primary p-2">
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
                  className="outline-none border-b border-primary w-full p-2"
                />
              </div>
              <div className="flex flex-col w-65">
                <input
                  type="date"
                  placeholder="Data"
                  className="outline-none border-b border-primary w-full p-2"
                />
              </div>
              <button type="submit" className="bg-primary dark:bg-secondary text-gray-100 py-2 rounded-b-md mt-4 cursor-pointer hover:bg-secondary transition-all duration-100 hover:rounded-md">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
