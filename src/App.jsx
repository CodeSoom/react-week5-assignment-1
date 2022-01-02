import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, loadRegions, loadRestaurants } from './actions';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();
  const { region, category } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
    if (region !== '' && category !== '') {
      dispatch(loadRestaurants({ region, category }));
    }
  }, [region, category]);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
