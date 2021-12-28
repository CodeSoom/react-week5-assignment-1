export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {`${restaurant.name} | 
          ${restaurant.category} | 
          ${restaurant.place}`}
        </li>
      ))}
    </ul>
  );
}
