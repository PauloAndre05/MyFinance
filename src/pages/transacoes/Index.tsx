import { useEffect, useState } from "react";
import { FiltrosTransacoes } from "../../components/transacoes/filtros/Index";
import { HeaderTransacoes } from "../../components/transacoes/headerTransacoes/Index";
import { TabelaTransacoes } from "../../components/transacoes/tabelaTransacoes/Index";
import { ModalCriarTransacao } from "../../components/transacoes/modalCriarTransacao/Index"; 7
import { TransactionService } from "../../services/TransactionService";
import type { Transacao } from "../../types/Transaction";

export const Transacoes = () => {
  useEffect(() => {
    document.title = "MyFinance - Transações";

  }, []);
  const Transacoes = TransactionService.getAll();
  console.log(Transacoes)

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [filteredTransacoes, setFilteredTransacoes] = useState(Transacoes);
  const [getTransactionToEdit, setGetTransactionToEdit] = useState<Transacao>()

  function handleSearch(term: string) {
    const filtered = Transacoes.filter(transacao => transacao.descricao.toLowerCase().includes(term.toLowerCase()) || transacao.categoria.toLowerCase().includes(term.toLowerCase()) || transacao.date.includes(term) || transacao.tipo.toLowerCase().includes(term.toLowerCase()));
    setFilteredTransacoes(filtered);
  }

  function getTransactionById (id: string) {
    if(id) {
      const result = Transacoes?.find(transactionId => transactionId.id === id)
      setGetTransactionToEdit(result)
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <HeaderTransacoes
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <FiltrosTransacoes onSearch={handleSearch} />
      <TabelaTransacoes transacoes={filteredTransacoes} getTransactionById={getTransactionById} transactionFound={getTransactionToEdit}/>
      <ModalCriarTransacao isOpen={isOpenModal} setIsOpen={setIsOpenModal} />

    </div>
  );
};
