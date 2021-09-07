export default function CategoryList({ categories, onClick, selectedCategory }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick({
              field: 'selectedCategory',
              value: { id, name },
            })}
          >
            {id === selectedCategory.id ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
