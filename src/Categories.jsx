export default function Categories({
  categories,
  onClick,
  selectedCategory,
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
              selectedCategory === category.id && '✅'
            }
          </button>
        ))
      }
    </div>
  );
}
