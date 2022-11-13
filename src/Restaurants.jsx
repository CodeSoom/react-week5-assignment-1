export default function Restaurants({ restaurants }) {
  if (!restaurants.length) {
    return <p>레스토랑이 존재하지 않습니다.</p>;
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
