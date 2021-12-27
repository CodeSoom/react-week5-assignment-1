export default function Categories({ categories }) {
  if (!categories.length) {
    return null;
  }

  return (
    <ul>
      {categories.map((category) => (
        <button key={category.id} type="button">
          {category.name}
        </button>
      ))}
    </ul>
  );
}
