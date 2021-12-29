export default function Restaurants({ restaurants }) {
  if (restaurants.length === 0) {
    return (
      <div>
        지역과 카테고리를 선택하세요.
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
