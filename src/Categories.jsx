export default function Categories({ categories, selectedCategory, onClick }) {
  return (
    <ul>
      {
        categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={() => onClick(category)}>
              { selectedCategory.id === category.id ? `${category.name}(V)` : category.name}
            </button>
          </li>
        ))
      }
    </ul>
  );
}
