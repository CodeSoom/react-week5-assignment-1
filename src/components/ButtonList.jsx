export default function ButtonList({ names, onClick, selected }) {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>
          <button
            type="button"
            onClick={() => onClick(name)}
          >
            {(selected === name) ? `${name}(V)` : name}
          </button>
        </li>
      ))}
    </ul>
  );
}
