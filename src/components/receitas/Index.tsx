import { CurrencyEurIcon, DotsThreeIcon } from "@phosphor-icons/react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

export const Receitas = () => {
  return (
    <div className="bg-white flex flex-col gap-4 px-8 py-4 rounded-md dark:bg-[#262C36] shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <HiTrendingUp size={24} className="text-yellow-300" />
          <h2 className="font-semibold text-xl">Receitas</h2>
        </div>
        <DotsThreeIcon size={35} className="cursor-pointer" />
      </div>
      <div className="flex items-center">
        <CurrencyEurIcon size={24} />
        <p className="text-xl">2.100,00</p>
      </div>
      <div className="flex items-center gap-4">
        <FaLongArrowAltUp size={14} color="green" />
        <p>+ 12% vs Novembro</p>
      </div>
      <div className="mt-auto text-sm flex items-center">
        <p>Última entrada: 31 Nov .</p>
        <p className="flex items-center text-green-700"> <CurrencyEurIcon size={14} />850,00</p>
      </div>
    </div>
  );
};
