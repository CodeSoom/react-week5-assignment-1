export default function RestaurantsList({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <h2>{name}</h2>
        </li>
      ))}
    </ul>
  );
}
