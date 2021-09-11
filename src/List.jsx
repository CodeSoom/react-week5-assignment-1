export default function List({
  type, items, chosenItem, onClick,
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <button type="button" onClick={onClick(type, item)}>
            {`${item.name}${item.id === chosenItem.id ? '(V)' : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}
