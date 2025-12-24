import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const linkList = [
    { id: 1, name: "Dashboard", href: "/" },
    { id: 2, name: "Transações", href: "/transacoes" },
    { id: 3, name: "Categorias", href: "/categorias" },
    { id: 4, name: "Relatórios", href: "/relatorios" },
    { id: 5, name: "Configurações", href: "/configuracoes" },
  ];
  const [isActive, setrIsActive] = useState(1);

  function handleClick(id: number, ref: string) {
    setrIsActive(id);
    navigate(ref);
  }
  return (
    <aside className="flex flex-col h-screen gap-4 p-6 border-r dark:border-r-[#262C36] fixed w-60">
      <div className="flex">
        <span className="text-2xl font-bold dark:text-white">My</span>
        <span className="text-2xl text-primary dark:text-[#615FFF] font-bold">Finance</span>
      </div>
      <nav>
        <ul className="flex flex-col gap-2">
          {linkList.map((link) => (
            <li
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#262C36] transition-colors rounded-md duration-75 dark:text-white dark:font-light ${
                isActive === link.id
                  ? "bg-gray-100 dark:bg-[#262C36] text-primary font-semibold"
                  : ""
              }`}
              key={link.id}
              onClick={() => {
                handleClick(link.id, link.href);
              }}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
      <footer className="mt-auto mx-auto text-xs font-extralight">© 2025 MyFinance</footer>
    </aside>
  );
};
