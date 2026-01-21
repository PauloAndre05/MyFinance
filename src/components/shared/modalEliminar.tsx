interface ModalEliminarProps {
    nomeAcao: string;
    isOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}

export const ModalEliminar = ({ nomeAcao, isOpen, setIsOpen }: ModalEliminarProps) => {
    function handleCloseModal() {
    if (setIsOpen) {
      setIsOpen(false);
    }
  }

    return (
        <>
      {isOpen && (
        <div className="absolute bg-black/10 dark:bg-black/50 inset-0 flex justify-center items-center backdrop-blur-[.5px] z-10">
          <div className="p-6 bg-white dark:bg-crdBg-secondary border-primary shadow-xl flex flex-col gap-6 rounded-md z-50"  onClick={(e) => e.stopPropagation()}>
            <h1 className="text-center font-semibold">Tem a certeza que deseja eliminar a/o {nomeAcao}?</h1>
            <div className="flex justify-between gap-3">
                <button className="w-full bg-gray-500 dark:bg-secondary text-gray-100 py-2 rounded-md mt-4 cursor-pointer hover:bg-red-400 transition-all duration-100 hover:rounded-md" onClick={handleCloseModal}>Eliminar</button>
                <button className="w-full bg-gray-500 text-gray-100 py-2 rounded-md mt-4 cursor-pointer hover:bg-gray-600 transition-all duration-100 hover:rounded-md" onClick={handleCloseModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </> 
    )
}