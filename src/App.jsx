import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CategoriesContainer from './Components/Categories/CategoriesContainer';
import RegionsContainer from './Components/Regions/RegionsContainer';
import RestaurantsContainer from './Components/Restaurants/RestaurantsContainer';

import { loadCategories, loadRegions } from './stores/actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
