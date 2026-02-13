import { Input } from "../../shared/Input";
import type { CategoryInterface } from "../../../types/Category";
import { CategoryItem } from "../categoryItem/Index";

interface CategoryListProps {
  categories: CategoryInterface[];
  onDelete: (id: string) => void
}

export const CategoryList = ({ categories, onDelete }: CategoryListProps) => {
  return (
    <div className="flex flex-col gap-6">
      <Input placeholder="Search categoty" className="text-sm w-60" />
      <div className="grid grid-cols-4 gap-2 flex-wrap">
          {categories.map((category) => (
           <CategoryItem key={category.id} category={category} onDelete={onDelete}/>
          ))}
      </div>
    </div>
  );
};
