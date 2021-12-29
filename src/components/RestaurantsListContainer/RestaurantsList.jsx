export default function RestaurantsList({ restaurants }) {
  return (
    <div>
      <h2 style={{ display: 'none' }}>레스토링 리스트</h2>
      <ul>
        {restaurants.map(({ id, name }) => (
          <li key={id}>
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
