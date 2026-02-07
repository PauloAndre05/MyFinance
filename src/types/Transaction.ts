export type TransacaoTipo = "income" | "expense"

export interface Transaction {
    id: string,
    type: TransacaoTipo,
    description: string,
    category: string,
    amount: number,
    date: string,
    createdAt: string
}