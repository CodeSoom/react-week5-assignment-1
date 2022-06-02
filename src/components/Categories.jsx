export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
  );
}
