export default function ListContainer({ restaurants }) {
//   const { restaurants } = useSelector((state) => ({
//     restaurants: state.restaurants,
//   }));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.name}>
          <p>
            {restaurant.name}
            |
            {restaurant.category}
            |
            {restaurant.address}
          </p>
        </li>
      ))}
    </ul>
  );
}
