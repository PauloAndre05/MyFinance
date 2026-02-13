import { BsTrash3 } from "react-icons/bs";
import { PiPencilLight } from "react-icons/pi";
import { ModalEliminar } from "../../shared/modalEliminar";

import type { CategoryInterface } from "../../../types/Category";
import { useState } from "react";

interface CategoryIntemProps {
  category: CategoryInterface;
  onDelete: (id: string) => void
}

export const CategoryItem = ({ category, onDelete }: CategoryIntemProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [id, setId] = useState<string>("")

    function handleModal(id: string) {
        setId(id)
        setIsOpen(!isOpen)
    }
    
  return (
    <div className="bg-white dark:bg-crdBg-secondary rounded-md shadow-sm gap-0">
      <div className="flex justify-between items-center p-4 hover:bg-gray-50 dark:hover:bg-zinc-800 transition">
        <div className="flex items-center gap-4">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <div>
            <h3 className="font-medium">{category.name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>🍔</span>
              <span>#22c55e</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-600">
            Despesa
          </span>
          <div className="">
            <button className="p-1 mr-1 cursor-pointer">
              <PiPencilLight size={15} />
            </button>
            <button className="p-1 cursor-pointer"
            onClick={() => handleModal(category.id)}>
              <BsTrash3 size={15} />
            </button>
            <ModalEliminar isOpen={isOpen} setIsOpen={setIsOpen} onDelete={onDelete} id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
};
