export default function Categories({ categories, category, handleClick }) {
  return (
    <ul>
      {categories.length > 0 && categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            value={id}
            onClick={() => {
              handleClick(id);
            }}
          >
            {name}
            {category && category.id === id ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
