export default function Category({ category, selectedCategoryId, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(category.id)}
      >
        {category.name}
        {selectedCategoryId === category.id && '(V)'}

      </button>
    </li>
  );
}
