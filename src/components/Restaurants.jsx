export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((restaurant) => {
        const {
          name, category, address, id,
        } = restaurant;

        return (
          <li key={id}>
            {name}
            {' '}
            |
            {category}
            {' '}
            |
            {address}
            {' '}
          </li>
        );
      })}
    </ul>
  );
}
