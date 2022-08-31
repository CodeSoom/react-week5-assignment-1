export default function Categories({ categories }) {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <button type="button">
            {category.name}
          </button>
        </div>
      ))}
    </div>
  );
}
