export default function Buttons({
  items, targetName, currentId, onClick,
}) {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>
          <button type="button" name={targetName} value={id} onClick={() => onClick(id)}>
            {name}
            {id === Number(currentId) && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
