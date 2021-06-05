import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRegions, loadCategories } from './actions';
import RegionsContainer from './container/RegionsContainer';
import CategoriesContainer from './container/CategoriesContainer';
import RestaurantsContainer from './container/RestaurantsContainer/RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
