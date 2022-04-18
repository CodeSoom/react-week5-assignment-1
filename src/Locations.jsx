export default function Locations({ locations }) {
  return (
    <ul>
      {locations.map((location) => (
        <li key={location.id}>
          {location.name}
        </li>
      ))}
    </ul>
  );
}
