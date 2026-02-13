export const  HeaderCategory = () => {
  return (
    <div className="flex flex-col gap-6">
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
</div>

  );
};
