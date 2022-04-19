export default function Categories({ categories, categoryId, onClick }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick({ id })}
          >
            {categoryId === id ? (
              `${name}(V)`
            ) : (
              name
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
