export default function RestaurantsList({ restaurants }) {
  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}
