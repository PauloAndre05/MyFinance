import type { Transacao } from "../types/Transaction"

const STORAGE_KEY = "@finance:transactions"

function getAll(): Transacao[] {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
}

function save(transacoes: Transacao[]){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transacoes))
}

function create(transacao: Transacao) {
    const transacoes = getAll()
    save([transacao, ...transacoes])
}

function update(id: string, actualizarTransacao: Partial<Transacao>){
    const transacoes = getAll()

    const novaTransacao = transacoes.map((transacao) => 
        transacao.id === id 
            ? {...transacao, ...actualizarTransacao} 
            : transacao
    )

    save(novaTransacao)
}

function remove(id: string){
    const transacao = getAll()

    save(transacao.filter(transacao => transacao.id !== id))
}

function clear() {
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