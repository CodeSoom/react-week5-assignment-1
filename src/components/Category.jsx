export default function Category({ category, onClick, isSelected }) {
  return (
    <button
      type="button"
      onClick={() => onClick(category.id)}
    >
      { category.name }
      { isSelected ? '(V)' : '' }
    </button>
  );
}
