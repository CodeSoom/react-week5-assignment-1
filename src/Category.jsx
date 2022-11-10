export default function Category({ category, isSelected, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(category.id)}
      >
        {category.name}
        {isSelected ? '(V)' : ''}
      </button>
    </li>
  );
}
