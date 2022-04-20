export default function Categories({ categories }) {
  if (!categories.length) {
    return <p>카테고리가 없어요!</p>;
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button">
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
