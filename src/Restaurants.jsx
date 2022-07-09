const Restaurants = ({ restaurants }) => (
  <ul>
    {restaurants.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

export default Restaurants;
