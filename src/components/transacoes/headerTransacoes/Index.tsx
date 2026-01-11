import { format } from "date-fns";
interface HeaderTransacoesProps {
  isOpenModal?: boolean;
  setIsOpenModal?: (isOpen: boolean) => void;
}

export const HeaderTransacoes = ({
  isOpenModal,
  setIsOpenModal,
}: HeaderTransacoesProps) => {
  const date = new Date();
  const currentMonth = format(date, "MMMM");
  const currenteYear = format(date, "yyyy");

  function handleOpenModal() {
    if (setIsOpenModal) {
      setIsOpenModal(!isOpenModal);
    }
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">Transações</h1>
        <p className="text-sm">{`${currentMonth} de ${currenteYear} . 18 transações`}</p>
      </div>
      <button
        className="px-4 py-2 text-white font-semibold bg-primary rounded-md cursor-pointer"
        onClick={handleOpenModal}
      >
        Nova transação
      </button>
    </div>
  );
};
