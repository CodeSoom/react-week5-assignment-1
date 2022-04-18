export default function Categories({ categories, categoryId, onClick }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => onClick({ id: category.id })}
          >
            {categoryId === category.id ? (
              `${category.name}(V)`
            ) : (
              category.name
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
