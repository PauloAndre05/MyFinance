import { useEffect, useState } from "react";
import { CategoryList } from "../../components/category/categoryList/Index";
import { HeaderCategory } from "../../components/category/headerCategory/Index";
import type { CategoryInterface } from "../../types/Category";
import { CategoryService } from "../../services/CategoryServices";

export const Category = () => {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await CategoryService.getAll();
      setCategories(data);
    }
    loadCategories();
  }, []);

  /* Deletar Categoria */

  async function DeleteCategory(id: string) {
    CategoryService.remove(id);
    setCategories((prev) => prev.filter((category) => category.id !== id));
  }

  return (
    <div className="flex flex-col gap-4">
      <HeaderCategory />
      <CategoryList categories={categories} onDelete={DeleteCategory}/>
    </div>
  );
};
