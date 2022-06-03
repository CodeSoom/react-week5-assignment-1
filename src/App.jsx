import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AreasContainer from './areas/AreasContainer';
import CategoriesContainer from './categories/CategoriesContainer';
import { loadCategories, loadAreas } from './redux/reducer';
import RestaurantsContainer from './restaurants/RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAreas());
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <AreasContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
