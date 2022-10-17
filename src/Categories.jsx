export default function Categories({ categories, onClick, selectedId }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={() => onClick(category.id)}>
            {selectedId === category.id
              ? `${category.name}(V)`
              : category.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
