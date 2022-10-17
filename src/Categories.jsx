export default function Categories({ categories, categoryId, handleClick }) {
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
                category.id === categoryId
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
