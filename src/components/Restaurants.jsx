import EMPTY_MESSAGES from '../../constants/emptyMessages';

export default function Restaurants({ restaurants, errorMessage }) {
  if (!restaurants?.length) {
    return <div>{errorMessage ?? EMPTY_MESSAGES.RESTAURANT}</div>;
  }

  return (
    <div>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
