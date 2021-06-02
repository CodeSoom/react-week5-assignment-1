export default function ButtonList({ names, onClick }) {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>
          <button
            type="button"
            onClick={onClick}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
