import { useEffect, useState } from "react";
import { FiltrosTransacoes } from "../../components/transacoes/filtros/Index";
import { HeaderTransacoes } from "../../components/transacoes/headerTransacoes/Index";
import { TabelaTransacoes } from "../../components/transacoes/tabelaTransacoes/Index";
import { ModalCriarTransacao } from "../../components/transacoes/modalCriarTransacao/Index";
import { dadosTransacoes } from "../../components/transacoes/dadosTransacoes";

export const Transacoes = () => {
  useEffect(() => {
    document.title = "MyFinance - Transações";
  }, []);

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [filteredTransacoes, setFilteredTransacoes] = useState<typeof dadosTransacoes>(dadosTransacoes);
  return (
      <div className="flex flex-col gap-6">
        <HeaderTransacoes
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
        <FiltrosTransacoes filteredTransacoes={filteredTransacoes} />
        <TabelaTransacoes filteredTransacoes={filteredTransacoes} />
        <ModalCriarTransacao isOpen={isOpenModal} setIsOpen={setIsOpenModal} />

      </div>
  );
};
