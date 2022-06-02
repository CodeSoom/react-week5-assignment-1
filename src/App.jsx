import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCategories } from './action';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <CategoriesContainer />
    </>
  );
}
