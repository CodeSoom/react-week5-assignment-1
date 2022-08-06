export default function RestaurantsResult({ restaurants }) {
  return (
    <div>
      <ul>
        {restaurants && restaurants.map(((item) => {
          const { id, name } = item;
          return (
            <li key={id}>{name}</li>
          );
        }
        ))}
      </ul>
    </div>
  );
}
