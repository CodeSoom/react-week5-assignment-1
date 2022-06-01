import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadCategories, loadRegions } from './actions';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <CategoriesContainer />
    </>
  );
}
