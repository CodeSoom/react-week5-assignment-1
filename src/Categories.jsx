export default function Categories({ categories, onClick, categoryId }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => onClick({
              field: 'categoryId',
              content: category.id,
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
