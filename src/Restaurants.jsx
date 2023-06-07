export default function Restaurants({ restaurants }) {
  return (
    <>
      {restaurants?.map((restaurant) => <li key={restaurant.id}>{restaurant.name}</li>)}
    </>
  );
}
