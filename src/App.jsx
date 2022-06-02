import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import RestaurantsContainer from './RestaurantsContainer';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

import CategoriesContainer from './CategoriesContainer';

import { loadCategories, loadRestaurants } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantsCreateContainer />
    </div>
  );
}
