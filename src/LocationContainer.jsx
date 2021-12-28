import locations from '../fixtures/locations';

export default function LocationContainer() {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          {location.location}
        </li>
      ))}
    </ul>
  );
}
