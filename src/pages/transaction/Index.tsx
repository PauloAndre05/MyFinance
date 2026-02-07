import { useEffect, useState } from "react";
import { FiltrosTransacoes } from "../../components/transacoes/filtros/Index";
import { HeaderTransacoes } from "../../components/transacoes/headerTransacoes/Index";
import { TableTransactions } from "../../components/transacoes/tabelaTransacoes/Index";
import { ModalCreateTransaction } from "../../components/transacoes/modalCriarTransacao/Index";
import { TransactionService } from "../../services/TransactionService";
import type { Transaction } from "../../types/Transaction";

export const Transacoes = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransacoes, setFilteredTransacoes] = useState<Transaction[]>(
    [],
  );
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [transactionToEdit, setTransactionToEdit] =
    useState<Transaction>();

  useEffect(() => {
    document.title = "MyFinance - Transações";
    async function loadTransactions() {
      const data = await TransactionService.getAll();
      setTransactions(data);
      setFilteredTransacoes(data);
      console.log(data);
    }
    loadTransactions();
  }, []);

  function handleSearch(term: string) {
    const filtered = term
      ? transactions.filter(
          (transaction) =>
            transaction.description
              .toLowerCase()
              .includes(term.toLowerCase()) ||
            transaction.category.toLowerCase().includes(term.toLowerCase()) ||
            transaction.date.includes(term) ||
            transaction.type.toLowerCase().includes(term.toLowerCase()),
        )
      : transactions;
    setFilteredTransacoes(filtered);
  }

  function getTransactionById(id: string) {
    const transaction = transactions.find(
      (transactionId) => transactionId.id === id,
    );
    if (transaction) {
      setTransactionToEdit(transaction);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <HeaderTransacoes
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <FiltrosTransacoes onSearch={handleSearch} />
      <TableTransactions
        transactions={filteredTransacoes}
        getTransactionById={getTransactionById}
        transactionFound={transactionToEdit}
      />
      <ModalCreateTransaction isOpen={isOpenModal} setIsOpen={setIsOpenModal} />
    </div>
  );
};
