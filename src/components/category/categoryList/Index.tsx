import type { CategoryInterface } from "../../../types/Category";
import { CategoryItem } from "../categoryItem/Index";

interface CategoryListProps {
  categories: CategoryInterface[];
  onDelete: (id: string) => void
  view: string
}

export const CategoryList = ({ categories, onDelete, view }: CategoryListProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className={`${view === "grid" ? "grid grid-cols-4 gap-2 flex-wrap" : "flex flex-col gap-2"}`}>
          {categories.map((category) => (
           <CategoryItem key={category.id} category={category} onDelete={onDelete}/>
          ))}
      </div>
    </div>
  );
};
