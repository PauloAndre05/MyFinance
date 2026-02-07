import type { Transaction } from "../types/Transaction"

const STORAGE_KEY = "@finance:transactions"

async function getAll(): Promise<Transaction[]> {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
}

function save(transacoes: Transaction[]){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transacoes))
}

async function create(transaction: Transaction): Promise<void> {
    const transacoes = await getAll()
    save([transaction, ...transacoes])
}

async function update(id: string, updateTransaction: Partial<Transaction>): Promise<void>{
    const transacoes = await getAll()

    const newTransaction = transacoes.map((transaction) => 
        transaction.id === id 
            ? {...transaction, ...updateTransaction} 
            : transaction
    )

    save(newTransaction)
}

async function remove(id: string): Promise<void>{
    const transaction = await getAll()

    save(transaction.filter(transaction => transaction.id !== id))
}

async function clear(): Promise<void> {
    localStorage.removeItem(STORAGE_KEY)
}

export const TransactionService = {
    getAll,
    save,
    create,
    update,
    remove,
    clear
}