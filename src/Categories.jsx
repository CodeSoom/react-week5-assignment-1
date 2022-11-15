export default function Categories({
  categories,
  onClick,
  selectedCategoryId,
}) {
  return (
    <div>
      {
        categories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => onClick(category.id)}
          >
            {category.name}
            {
              selectedCategoryId === category.id && '✅'
            }
          </button>
        ))
      }
    </div>
  );
}
