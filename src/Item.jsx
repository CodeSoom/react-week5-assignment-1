export default function Item({ item, selectedId, onClick }) {
  return (
    <li>
      <button type="button" id={item} onClick={onClick}>
        {`${item.name}${item.id === selectedId ? '(V)' : ''}`}
      </button>
    </li>
  );
}
