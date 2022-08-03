export default function Restaurants({ restaurants = [] }) {
  return (
    <ul>
      {restaurants.map((region) => (
        <li key={region.id}>{region.name}</li>
      ))}
    </ul>
  );
}
