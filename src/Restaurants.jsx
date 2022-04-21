export default function Restaurants({ restaurants, isSelectRegion, isSelectCategory }) {
  if (!isSelectRegion) {
    return (
      <p>지역을 선택해주세요!</p>
    );
  }

  if (!isSelectCategory) {
    return (
      <p>분류를 선택해주세요!</p>
    );
  }

  if (!restaurants) {
    return null;
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
}
