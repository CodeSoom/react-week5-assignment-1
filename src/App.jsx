import categories from './fixtures/cetegories';
import regions from './fixtures/regions';
import restaurants from './fixtures/restaurants';

const filteredRestaurant = restaurants.filter(
  (restaurant) => restaurant.categoryId === (1)
    && restaurant.address.includes('서울'),
);

export default function App() {
  return (
    <>
      {regions.map((region) => (
        <button type="button" key={region.id}>{region.name}</button>))}
      {categories.map((category) => (
        <button type="button" key={category.id}>{category.name}</button>))}
      <ul>
        {
          filteredRestaurant.map((restaurant) => (<li key={restaurant.id}>{restaurant.name}</li>))
        }
      </ul>
    </>
  );
}
