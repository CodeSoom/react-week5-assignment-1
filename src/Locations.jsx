export default function Locations({ locations, locationId, onClick }) {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          <button
            type="button"
            onClick={onClick({ id: location.id })}
          >
            {locationId === location.id ? (
              `${location.name}(V)`
            ) : (
              location.name
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
