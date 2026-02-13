import { Input } from "../../shared/Input";
import { ViewToggle } from "../viewToggle/Index";

interface HeaderCategoryProps {
  handleToggleView: (value: "grid" | "list") => void
}

export const HeaderCategory = ({handleToggleView} : HeaderCategoryProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Categorias</h1>  
          <p className="text-sm text-gray-500">
            Gerencie as categorias de receitas e despesas
          </p>
        </div>

        <button className="bg-primary text-white px-4 py-2 rounded-md">
          + Nova Categoria
        </button>
      </div>
      <div className="flex justify-between items-center">
        <Input placeholder="Search categoty" className="text-sm w-60" />
        <ViewToggle setValue={handleToggleView}/>
      </div>
    </div>
  );
};
