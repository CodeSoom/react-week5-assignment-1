export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => {
        const { name, id } = restaurant;
        return (
          <li key={id}>
            {name}
          </li>
        );
      })}
    </ul>
  );
}
