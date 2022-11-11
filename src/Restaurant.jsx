export default function Restaurant({ restaurants }) {
  if (restaurants.length === 0) {
    return <p>레스토랑 정보가 존재하지 않습니다.</p>;
  }
  return (
    <ul>
      {
        restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
          >
            {restaurant.name}
          </li>
        ))
      }
    </ul>
  );
}
