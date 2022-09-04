export default function Button({ item, selected, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick(item)}
      >
        {item.name}
        {item.name === selected.name ? '(V)' : ''}
      </button>
    </li>
  );
}
