import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const linkList = [
    { id: 1, name: "Dashboard", href: "/" },
    { id: 2, name: "Transações", href: "#" },
    { id: 3, name: "Categorias", href: "#" },
    { id: 4, name: "Relatórios", href: "#" },
    { id: 5, name: "Configurações", href: "#" },
  ];
  const [isActive, setrIsActive] = useState(1);

  function handleClick(id: number, ref: string) {
    setrIsActive(id);
    navigate(ref);
  }
  return (
    <aside className="flex flex-col h-screen gap-4 p-6 border-blue-50 fixed">
      <div className="flex">
        <span className="text-2xl font-bold">My</span>
        <span className="text-2xl text-blue-700 font-bold">Finance</span>
      </div>
      <nav>
        <ul className="flex flex-col gap-1">
          {linkList.map((link) => (
            <li
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-blue-700 hover:font-semibold transition-colors rounded-md duration-75 ${
                isActive === link.id
                  ? "bg-gray-100 text-blue-700 font-semibold"
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
      <footer className="mt-auto mx-auto text-sm">© 2025 MyFinance</footer>
    </aside>
  );
};
