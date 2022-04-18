export default function Locations({ locations, locationName, onClick }) {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          <button
            type="button"
            onClick={() => onClick({ name: location.name })}
          >
            {locationName === location.name ? (
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
