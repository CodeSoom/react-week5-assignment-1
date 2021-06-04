import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRegions, loadCategories } from './actions';
import CategoryButtonsContainer from './container/CategoryButtonsContainer';
import RegionButtonsContainer from './container/RegionButtonsContainer';
import RestaurantsContainer from './container/RestaurantsContainer/RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionButtonsContainer />
      <CategoryButtonsContainer />
      <RestaurantsContainer />
    </div>
  );
}
