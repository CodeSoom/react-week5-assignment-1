export default function Locations({ location, locations, onClick }) {
  return (
    <ul>
      {locations.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(name)}
          >
            {name}
            {location === name ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  );
}
