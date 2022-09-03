export default function Categories({ categories, onClick, filter }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => onClick({
              field: 'category',
              content: category.name,
            })}
          >
            {category.name}
            {category.name === filter ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
