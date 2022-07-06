export default function Category({
  onClick,
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={onClick(setSelectedCategory, category)}>
            {selectedCategory.id !== category.id ? (`${category.name}`) : (`${category.name}(V)`)}
          </button>
        </li>
      ))}
    </ul>
  );
}
