const nameFunctions = {
  [true]: (name) => `${name}(V)`,
  [false]: (name) => name,
};

export default function List({ list, onSelect, selectedId }) {
  function handleClick(id) {
    onSelect(id);
  }

  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <button
            type="button"
            onClick={() => handleClick(item.id)}
          >
            {nameFunctions[item.id === selectedId](item.name)}
          </button>
        </li>
      ))}
    </ul>
  );
}
