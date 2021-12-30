import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, loadRegions } from './actions';

import restaurants from './fixtures/restaurants';

const filteredRestaurant = restaurants.filter(
  (restaurant) => restaurant.categoryId === (1)
    && restaurant.address.includes('서울'),
);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  const { regions, categories } = useSelector(state => ({
    regions: state.regions,
    categories: state.categories
  }))

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
