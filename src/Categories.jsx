export default function Categories({ categories, selectCategoryId, handleClick }) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              type="button"
              onClick={() => handleClick(category.id)}
            >
              {
                category.id === selectCategoryId
                  ? `${category.name}(V)`
                  : category.name
              }
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
