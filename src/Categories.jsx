export default function Categories({
  categories,
  checkedCategoryId,
  onClick,
}) {
  return (
    <ul>
      {categories.map((category) => {
        const checked = checkedCategoryId === category.id;
        return (
          <li key={category.id}>
            <button
              type="button"
              value={category.id}
              onClick={onClick}
            >
              {category.name}
              {checked && '(V)'}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
