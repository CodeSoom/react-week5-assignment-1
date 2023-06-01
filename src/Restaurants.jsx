export default function Restaurants({ restaurantData }) {
  return (
    <>
      {restaurantData?.map((restaurant) => <li key={restaurant.id}>{restaurant.name}</li>)}
    </>
  );
}
