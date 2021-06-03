export default function Button({
  name,
  onClick,
  selected,
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick({
          value: name,
        })}
      >
        {selected === name ? `${name}(V)` : name}
      </button>
    </li>
  );
}
