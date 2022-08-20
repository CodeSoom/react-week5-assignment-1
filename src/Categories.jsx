export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" id={category.id}>
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
