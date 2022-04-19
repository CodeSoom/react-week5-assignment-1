export default function Categories({ categories }) {
  if (!categories || categories.length === 0) {
    return <>카테고리가 없어요!</>;
  }

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
