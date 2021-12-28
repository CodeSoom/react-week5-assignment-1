export default function Locations({ locations, onClick }) {
  return (
    <ul>
      {locations.map((location) => (
        <li>
          <button
            type="button"
            key={location.id}
            onClick={() => onClick(location.location)}
          >
            {location.location}
          </button>
        </li>
      ))}
    </ul>
  );
}
