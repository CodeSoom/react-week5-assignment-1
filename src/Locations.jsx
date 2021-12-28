export default function Locations({ locations }) {
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
