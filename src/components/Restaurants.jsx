import Restaurant from './Restaurant';

export default function Restaurants({ restaurants = [] }) {
  if (!restaurants.length) {
    return (
      <p>
        레스토랑을 불러오지 못했습니다.
      </p>
    );
  }

  return (
    <ul>
      {
        restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
          />
        ))
      }
    </ul>
  );
}
