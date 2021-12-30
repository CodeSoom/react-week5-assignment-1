export default function RestaurantsList({ restaurants }) {
  return (
    <div>
      <h2 style={{ display: 'none' }}>레스토랑 리스트</h2>
      <ul>
        {restaurants.map(({ id, name }) => (
          <li key={id}>
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
