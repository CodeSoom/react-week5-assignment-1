const categoryNameFunctions = {
  [true]: (name) => `${name} (V)`,
  [false]: (name) => name,
};

export default function Categories({ categories, onSelect, selectedCategoryId }) {
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
          {categoryNameFunctions[category.id === selectedCategoryId](category.name)}
        </button>
      ))}
    </ul>
  );
}
