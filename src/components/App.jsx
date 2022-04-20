import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantContainer from '../containers/RestaurantContainer';

import { loadCategories, loadRestaurants, loadRegions } from '../redux/actions';

export default function App() {
  const dispatch = useDispatch();

  const { regionName, categoryId } = useSelector((state) => ({
    regionName: state.regionName,
    categoryId: state.categoryId,
  }));

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    dispatch(loadRestaurants({ regionName, categoryId }));
  }, [regionName, categoryId]);

  return (
    <>
      <h1>Restaurants</h1>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantContainer />
    </>
  );
}
