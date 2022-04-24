export default function Categories({ categories, selectedCategoryID, onClick }) {
  function handleClickCategory(id) {
    onClick(id);
  }

  if (!categories.length) {
    return <p>카테고리가 없어요!</p>;
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => handleClickCategory(category.id)}
          >
            {category.name}
            {selectedCategoryID === category.id ? '(V)' : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
