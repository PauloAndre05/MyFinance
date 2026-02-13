import { format } from "date-fns";
import { dadosTransacoes } from "../dadosTransacoes";

interface HeaderTransacoesProps {
  isOpenModal?: boolean;
  setIsOpenModal?: (isOpen: boolean) => void;
}

const totalTransacoes = dadosTransacoes.length;

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
    <div className="flex flex-col">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">Transações</h1>
          <p className="text-sm">{`${currentMonth} de ${currenteYear} . ${totalTransacoes} transações`}</p>
        </div>
        <button
          className="px-4 py-2 text-white font-semibold bg-primary rounded-md cursor-pointer"
          onClick={handleOpenModal}
        >
          Nova transação
        </button>
      </div>
      <div className="mt-5 border-b-4 border-orange-400 w-11" />

    </div>
  );
};
