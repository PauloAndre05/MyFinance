export type TransacaoTipo = "Receita" | "Despesa"

export interface Transacao {
    id: string,
    tipo: TransacaoTipo,
    descricao: string,
    categoria: string,
    valor: number,
    date: string,
    createdAt: string
}