export default function Categories({ categories, onSelect }) {
  function handleClick(id) {
    onSelect(id);
  }

  return (
    <ul>
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => handleClick(category.id)}
        >
          {category.name}
        </button>
      ))}
    </ul>
  );
}
