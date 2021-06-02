export default function Button({
  search, name, onClick,
  selected,
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick({
          search,
          value: name,
        })}
      >
        {selected === name ? `${name}(V)` : name}
      </button>
    </li>
  );
}
