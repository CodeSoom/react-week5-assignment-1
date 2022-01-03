export default function Restaurants({ restaurants }) {
  if (restaurants.length === 0) {
    return (
      <div>
        식당 정보가 없습니다.
      </div>
    );
  }

  return (
    <ul>
      {restaurants.map((restaurant) => {
        const { id, name } = restaurant;

        return (
          <li key={id}>{name}</li>
        );
      })}
    </ul>
  );
}
