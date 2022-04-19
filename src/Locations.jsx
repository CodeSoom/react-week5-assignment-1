export default function Locations({ locations, locationName, onClick }) {
  return (
    <ul>
      {locations.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick({ name })}
          >
            {locationName === name ? (
              `${name}(V)`
            ) : (
              name
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
