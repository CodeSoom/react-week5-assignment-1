export default function List({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.name}>
          {`${restaurant.name} | 
            ${restaurant.category} | 
            ${restaurant.place}`}
        </li>
      ))}
    </ul>
  );
}
