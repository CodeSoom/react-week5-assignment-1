import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantContainer from '../containers/RestaurantContainer';

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
      <RegionsContainer />
      <CategoriesContainer />
      <br />
      <RestaurantContainer />
    </>
  );
}
