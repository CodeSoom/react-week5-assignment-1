export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {
        restaurants.length > 0 ? restaurants.map(({ id, name }) => (
          <li key={id}>
            {name}
          </li>
        ))

          : <li />
      }
    </ul>
  );
}
