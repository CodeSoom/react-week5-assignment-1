export default function Item({ item, selected, onClick }) {
  return (
    <li>
      <button type="button" id={item} onClick={onClick}>
        {`${item.name}${selected ? '(V)' : ''}`}
      </button>
    </li>
  );
}
