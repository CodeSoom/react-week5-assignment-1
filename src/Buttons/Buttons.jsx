export default function Buttons({
  items, name, currentId, onClick,
}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <button type="button" name={name} value={item.id} onClick={() => onClick(item.id)}>
            {item.name}
            {item.id === Number(currentId) && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
