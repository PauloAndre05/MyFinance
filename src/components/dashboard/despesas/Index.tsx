import { CurrencyEurIcon, DotsThreeIcon } from "@phosphor-icons/react"
import { FaLongArrowAltDown } from "react-icons/fa"
import { GiTakeMyMoney } from "react-icons/gi"

export const Despesas = () => {
    return(
        <div className="bg-white flex flex-col gap-4 px-8 py-4 rounded-md dark:bg-[#262C36] shadow-md">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <GiTakeMyMoney size={24} className="text-red-400" />
                  <h2 className="font-semibold text-xl">Despesas</h2>
                </div>
                <DotsThreeIcon size={35} className="cursor-pointer" />
              </div>
              <div className="flex items-center">
                <CurrencyEurIcon size={24} />
                <p className="text-xl">850,00</p>
              </div>
              <div className="flex items-center gap-4">
                <FaLongArrowAltDown size={14} className="text-red-400" />
                <p>- 8% este mês</p>
              </div>
              <div className="mt-auto text-sm flex items-center">
                <p>Última saída: 23 Dez .</p>
                <p className="flex items-center text-red-400"> <CurrencyEurIcon size={14} />120,00</p>
              </div>
            </div>
    )
}