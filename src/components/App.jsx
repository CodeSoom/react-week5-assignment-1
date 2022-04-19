import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from '../containers/RegionsContainer';
import CategoriesContainer from '../containers/CategoriesContainer';
import RestaurantContainer from '../containers/RestaurantContainer';

import { loadCategories, loadRestaurants, loadRegions } from '../redux/actions';

export default function App() {
  const dispatch = useDispatch();

  const { regionName } = useSelector((state) => ({
    regionName: state.regionName,
  }));

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

      <div>
        지역 :
        {' '}
        {regionName}
      </div>
    </>
  );
}
