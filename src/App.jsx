import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRegions, loadCategories } from './actions';
import CategoryButtonsContainer from './container/CategoryButtonsContainer';
import RegionButtonsContainer from './container/RegionButtonsContainer';

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
    </div>
  );
}
