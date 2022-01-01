export default function Categories({
  categories,
  checkedCategoryId,
  onClick,
}) {
  return (
    <ul>
      {categories.map((category) => {
        const name = checkedCategoryId === category.id
          ? `${category.name}(V)`
          : category.name;

        return (
          <li key={category.id}>
            <button
              type="button"
              value={category.id}
              onClick={onClick}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
