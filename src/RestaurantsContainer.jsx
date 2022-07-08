import restaurants from '../fixtures/restaurants';

const RestaurantsContainer = () => (
  <ul>
    {restaurants.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

export default RestaurantsContainer;
