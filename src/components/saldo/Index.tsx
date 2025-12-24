import {
  CurrencyEurIcon,
  DotsThreeIcon,
  EyeIcon,
  EyeSlashIcon,
  HandCoinsIcon,
} from "@phosphor-icons/react";
import { useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

export const Saldo = () => {
  const [isSaldoVisible, setIsSaldoVisible] = useState(true);

  function toggleSaldoVisibility() {
    setIsSaldoVisible(!isSaldoVisible);
  }

  return (
    <div className="bg-white flex flex-col gap-4 px-8 py-4 rounded-md dark:bg-[#262C36] shadow-md">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <HandCoinsIcon size={24} color="green" />
          <h2 className="font-semibold text-xl">Meu Saldo</h2>
        </div>
        <DotsThreeIcon size={35} className="cursor-pointer" />
      </div>
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center relative">
          <CurrencyEurIcon size={24} />
          <p className="text-xl">1.245,30</p>
          <div
            className={` ${
              isSaldoVisible
                ? ""
                : "absolute inset-0 bg-white/10 backdrop-blur-[5px] shadow-2xl"
            } `}
          ></div>
        </div>
        {isSaldoVisible ? (
          <EyeSlashIcon
            size={24}
            className="cursor-pointer"
            onClick={toggleSaldoVisibility}
          />
        ) : (
          <EyeIcon
            size={24}
            className="cursor-pointer"
            onClick={toggleSaldoVisibility}
          />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaLongArrowAltUp size={14} color="green" />
            <p>Receitas</p>
          </div>
          <div className="flex gap-2 items-center">
            <CurrencyEurIcon size={14} />
            <p>2.100,00</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaLongArrowAltDown size={14} className="text-red-400" />
            <p>Despesas</p>
          </div>
          <div className="flex gap-2 items-center">
            <CurrencyEurIcon size={14} />
            <p>854,70</p>
          </div>
        </div>
        <div></div>
      </div>
      <p>Este mês</p>
    </div>
  );
};
