import { useEffect, useState } from "react";
import { FiltrosTransacoes } from "../../components/transacoes/filtros/Index";
import { HeaderTransacoes } from "../../components/transacoes/headerTransacoes/Index";
import { TableTransactions } from "../../components/transacoes/tabelaTransacoes/Index";
import { ModalCreateTransaction } from "../../components/transacoes/modalCriarTransacao/Index";
import { TransactionService } from "../../services/TransactionService";
import type { Transaction } from "../../types/Transaction";
import type { TransactioFormData } from "../../schemas/TransactionSchema";
import type { CategoryInterface } from "../../types/Category";
import { CategoryService } from "../../services/CategoryServices";

export const Transacoes = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransacoes, setFilteredTransacoes] = useState<Transaction[]>(
    [],
  );
  const [category, setCategory] = useState<CategoryInterface[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [transactionToEdit, setTransactionToEdit] = useState<Transaction>();

  useEffect(() => {
    document.title = "MyFinance - Transações";

    async function loadTransactions() {
      const data = await TransactionService.getAll();
      setTransactions(data);
      setFilteredTransacoes(data);
    }

    async function loadCategorys() {
      const data = await CategoryService.getAll();
      setCategory(data);
    }
    loadTransactions();
    loadCategorys();
  }, []);

  /* CRIAÇÃO DE UMA TRANSAÇÃO */

  function handleCreateTransaction(data: TransactioFormData) {
    const transaction = {
      id: crypto.randomUUID(),
      createdAt: new Date().toDateString(),
      ...data,
    };
    TransactionService.create(transaction);
    setTransactions((prev) => [...prev, transaction]);
    setFilteredTransacoes((prev) => [...prev, transaction]);
  }

  /* EDIÇÃO DA TRANSAÇÃO */

  function handleEdiTranasaction(id: string, transaction: TransactioFormData) {
    const update = {
      id,
      createdAt: new Date().toString(),
      ...transaction,
    };
    TransactionService.update(id, update);

    setTransactions((prev) =>
      prev.map((item) => (item.id === id ? update : item)),
    );
    setFilteredTransacoes((prev) =>
      prev.map((item) => (item.id === id ? update : item)),
    );
  }

  /* ELIMINAR TRANSAÇÃO */

  function handleDeleteTransaction(id: string) {
    TransactionService.remove(id);
    setTransactions((prev) => prev.filter((item) => item.id !== id));
    setFilteredTransacoes((prev) => prev.filter((item) => item.id !== id));
  }

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
        onUpdate={handleEdiTranasaction}
        onDelete={handleDeleteTransaction}
      />
      <ModalCreateTransaction
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        onCreate={handleCreateTransaction}
        category={category}
      />
    </div>
  );
};
