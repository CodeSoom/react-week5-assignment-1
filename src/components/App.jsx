import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RestaurantContainer from '../containers/RestaurantContainer';
import CategoriesContainer from '../containers/CategoriesContainer';

import { loadCategories, loadRestaurants, loadRegions } from '../redux/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
    dispatch(loadRestaurants());
  }, []);

  return (
    <>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <br />
      <RestaurantContainer />
    </>
  );
}
