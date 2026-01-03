import { HeaderTransacoes } from "../../components/transacoes/header/Index"

export const Transacoes = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">Transações</h1>
                <button className="px-4 py-2 bg-secondary text-white font-semibold dark:bg-primary rounded-md">+Nova</button>
            </div>
            <HeaderTransacoes />
        </div>
    )
}