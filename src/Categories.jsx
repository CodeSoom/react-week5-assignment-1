const categoryNameFunctions = {
  [true]: (name) => `${name} (V)`,
  [false]: (name) => name,
};

export default function Categories({ categories, onSelect, selectCategoryId }) {
  function handleClick(id) {
    onSelect(id);
  }

  return (
    <ul>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => handleClick(category.id)}
        >
          {categoryNameFunctions[category.id === selectCategoryId](category.name)}
        </button>
      ))}
    </ul>
  );
}
