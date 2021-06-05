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
        {name}
        {selected === name ? '(V)' : null}
      </button>
    </li>
  );
}
