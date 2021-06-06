export default function Region({ regions, onClick }) {
  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
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
