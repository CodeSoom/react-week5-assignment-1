export default function Categories({ categories }) {
  if (categories.length === 0) {
    return (
      <p>카테고리가 없습니다.</p>
    );
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button">{category.name}</button>
        </li>
      ))}
    </ul>
  );
}
