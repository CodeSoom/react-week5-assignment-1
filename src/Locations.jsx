export default function Locations({ locations, onClick }) {
  return (
    <ul>
      {locations.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(name)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
