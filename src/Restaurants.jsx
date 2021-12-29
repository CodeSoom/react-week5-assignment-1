// Presentational Components: 레스토랑 목록을 그려준다.
export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {`${restaurant.name}
           | ${restaurant.category}
            | ${restaurant.place}`}
        </li>
      ))}
    </ul>
  );
}
