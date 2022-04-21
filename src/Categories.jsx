export default function Categories({ categories, onClick }) {
  function handleClick(id) {
    onClick(id);
  }

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            type="button"
            onClick={() => handleClick()}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
