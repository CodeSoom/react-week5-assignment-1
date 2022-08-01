export default function Category({
  onClick,
  categories,
  selectedCategory,
}) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={() => onClick(category.id)}>
            {selectedCategory?.id !== category.id ? (`${category.name}`) : (`${category.name}(V)`)}
          </button>
        </li>
      ))}
    </ul>
  );
}
