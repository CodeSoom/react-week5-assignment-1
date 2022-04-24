export default function Button({
  name,
  onButtonClick,
  value,
  isSelected,
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onButtonClick({ value })}
      >
        {name}
        {isSelected() ? '(V)' : null}
      </button>
    </li>
  );
}
