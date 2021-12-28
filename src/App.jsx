import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CategoriesContainer from './CategoriesContainer';

import { loadCategories, loadRegions } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <h1>TITLE</h1>
      <CategoriesContainer />
    </>
  );
}
