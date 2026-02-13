import { useEffect, useState } from "react";
import { CategoryList } from "../../components/category/categoryList/Index";
import { HeaderCategory } from "../../components/category/headerCategory/Index";
import type { CategoryInterface } from "../../types/Category";
import { CategoryService } from "../../services/CategoryServices";

export const Category = () => {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [view, setView] = useState<"grid" | "list">(() => {
    const saved = localStorage.getItem("@finance:view2026");
    return saved ? JSON.parse(saved) : "grid";
  });

  useEffect(() => {

    async function loadCategories() {
      const data = await CategoryService.getAll();
      setCategories(data);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    localStorage.setItem("@finance:view2026", JSON.stringify(view));
  }, [view]);

  /* Deletar Categoria */

  async function DeleteCategory(id: string) {
    await CategoryService.remove(id);
    setCategories((prev) => prev.filter((category) => category.id !== id));
  }

  return (
    <div className="flex flex-col gap-4">
      <HeaderCategory handleToggleView={setView} />
      <CategoryList
        categories={categories}
        onDelete={DeleteCategory}
        view={view}
      />
    </div>
  );
};
