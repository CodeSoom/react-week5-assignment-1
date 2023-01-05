const Restaurants = ({ restaurants }) => (
  <ul>
    {restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        <p>{restaurant.name}</p>
      </li>
    ))}
  </ul>
);

export default Restaurants;
