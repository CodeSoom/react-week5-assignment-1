export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {
        restaurants.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))
      }
    </ul>
  );
}
