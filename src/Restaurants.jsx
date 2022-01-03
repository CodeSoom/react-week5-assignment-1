export default function Restaurants({ restaurants }) {
  if (!restaurants.length) {
    return null;
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
}
