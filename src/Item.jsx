export default function Item({ item, selectedItemId, onClick }) {
  const { id, name } = item;
  return (
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
  );
}
