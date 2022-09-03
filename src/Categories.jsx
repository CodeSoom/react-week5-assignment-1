export default function Categories({ categories, onClick }) {
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
          </button>
        </li>
      ))}
    </ul>
  );
}
