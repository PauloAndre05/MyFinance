interface EditarTransacaoModalProps {
  nomeAcao?: string,
  isOpen?: boolean,
  setIsOpen?: (isOpen: boolean) => void,
  dataTransactioEdit?: object
}

export const EditarTransacaoModal = ({
  nomeAcao,
  isOpen,
  setIsOpen,
  dataTransactioEdit
}: EditarTransacaoModalProps) => {
  function handleCloseModal() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

  return (
    <>
      {isOpen && (
        <div
          className="absolute bg-black/30 dark:bg-black/80 inset-0 flex justify-center items-center backdrop-blur-[.5px] z-10"
          onClick={handleCloseModal}
        >
          <div
            className="p-6 bg-white dark:bg-crdBg-secondary border-primary shadow-md flex flex-col z-50 rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <h1 className="text-center font-semibold">Editar {nomeAcao}</h1> */}

            {/* FORMULÁRIO DE EDIÇÃO */}

            <form className="text-sm">
              <div className="grid grid-cols-6 gap-3 items-stretch">
                <input
                  className="border-b p-2 outline-0 w-40 border-primary"
                  type="date"
                  placeholder=""
                />

                <input
                  className="border-b p-2 outline-0 w-40 border-primary"
                  type="text"
                  placeholder=""
                />

                <select
                  id="tipo"
                  className="border-b p-2 outline-0 w-40 border-primary"
                >
                  <option value="Despesa">Despesa</option>
                  <option value="Receita">Receita</option>
                </select>

                <select
                  id="categoria"
                  className="border-b p-2 outline-0 w-40 border-primary"
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
                />

                <button
                  className="w mx-auto bg-gray-500 text-gray-100 mt-2  cursor-pointer hover:bg-gray-600 transition-all duration-300 hover border w-40 rounded-md"
                  onClick={handleCloseModal}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
