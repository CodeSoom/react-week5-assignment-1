export default function List({ items, selectedItemId, onClick }) {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick({ id })}
          >
            {id === selectedItemId ? (
              `${name}(V)`
            ) : (
              name
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
