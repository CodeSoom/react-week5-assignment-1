export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={onClick({ id: category.id })}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
