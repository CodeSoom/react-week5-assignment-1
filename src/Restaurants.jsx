export default function Restaurants({
  restaurants,
  isSelectRegion,
  isSelectCategory,
  loading,
}) {
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

  if (loading) {
    return (
      <p>레스토랑 목록을 불러오고 있습니다.</p>
    );
  }

  if (!restaurants || restaurants.length === 0) {
    return (
      <p>조건에 맞는 레스토랑이 없습니다.</p>
    );
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
