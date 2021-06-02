import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoryListContainer from './components/CategoryListContainer';
import RegionListContainer from './components/RegionListContainer';
import { loadCategories, loadRegions } from './redux_module/asyncActions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  });

  return (
    <>
      <CategoryListContainer />
      <RegionListContainer />
    </>
  );
}
