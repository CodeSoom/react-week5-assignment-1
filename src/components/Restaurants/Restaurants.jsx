export default function Restaurants({ restaurants }) {
  return (
    <ul>
      {restaurants.map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
}
