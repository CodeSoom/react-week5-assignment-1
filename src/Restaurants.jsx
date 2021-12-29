export default function Restaurants({ restaurants }) {
  return (
    <ul key={restaurants.id}>
      {restaurants.map((restaurant) => (
        <li key={restaurants.id}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
}
