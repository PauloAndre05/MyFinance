import type { Category } from "../types/Category";

const STORAGE_KEY = "@finance:category";

async function getAll(): Promise<Category[]> {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

async function save(category: Category[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(category));
}

async function create(category: Category): Promise<void> {
  const categorys = await getAll();
  save([category, ...categorys]);
}

async function update(
  id: string,
  updateCategory: Partial<Category>,
): Promise<void> {
  const categorys = await getAll();

  const newCategory = categorys.map((category) =>
    category.id === id ? { ...category, ...updateCategory } : category
  );
  save(newCategory)
}

async function remove (id: string): Promise<void> {
    const categorys = await getAll()

    save(categorys.filter(category => category.id !== id))
}

async function clear (): Promise<void> {
    localStorage.removeItem(STORAGE_KEY)
}

export const CategoryService = {getAll, save, create, update, remove, clear}



/* Testes and registrations */

