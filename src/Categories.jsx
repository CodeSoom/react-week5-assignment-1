// Presentational Components: 레스토랑 목록을 그려준다.
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
