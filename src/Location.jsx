export default function Location({ locations }) {
  const LocationList = locations.map((location) => (
    <li key={location.id}>
      <p>
        {location.name}
      </p>
    </li>
  ));
  return (
    <ul>{LocationList}</ul>
  );
}
