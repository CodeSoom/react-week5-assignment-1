export default function Item({ selected, item, onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        {item.name}
        {selected && '(V)'}
      </button>
    </li>
  );
}
