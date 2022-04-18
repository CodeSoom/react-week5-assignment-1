export default function Categories({ categories }) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
