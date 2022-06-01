import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadCategories } from './actions';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <CategoriesContainer />
    </>
  );
}
