import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CategoriesContainer from './CategoriesContainer';

import { loadCategories, loadRegions } from './actions';
import RegionsContainer from './RegionsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <CategoriesContainer />
      <RegionsContainer />
    </>
  );
}
