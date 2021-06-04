import Restaurant from '../Restaurant';

export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant.name}
        />
      ))}
    </ul>
  );
}
