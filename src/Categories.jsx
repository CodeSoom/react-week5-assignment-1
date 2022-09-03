export default function Categories({ categories, onClick, categoryId }) {
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
            {category.id === categoryId ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
