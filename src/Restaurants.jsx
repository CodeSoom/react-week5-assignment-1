export default function Restaurants({ restaurants = [] }) {
  if (restaurants.length === 0) {
    return null;
  }
  return (
    <ul>
      {restaurants.map((restaurant) => {
        const { id, name } = restaurant;
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
}
