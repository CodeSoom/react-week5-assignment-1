export default function Button({ item: { id, name }, selected, onClick }) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
      >
        {name}
        {name === selected ? '(V)' : ''}
      </button>
    </li>
  );
}
