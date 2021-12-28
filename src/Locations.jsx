export default function Locations({ locations, onClick }) {
  return (
    <ul>
      {locations.map((location) => (
        <button
          type="button"
          key={location.id}
          onClick={onClick}
        >
          {location.location}
        </button>
      ))}
    </ul>
  );
}
