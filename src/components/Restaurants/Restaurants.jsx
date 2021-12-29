export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((item) => <li>{item.name}</li>)}
    </ul>
  );
}
