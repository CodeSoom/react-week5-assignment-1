export default function Locations({ locations, onClick }) {
  return (
    <ul>
      {locations.map(({ id, location }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(location)}
          >
            {location}
          </button>
        </li>
      ))}
    </ul>
  );
}
