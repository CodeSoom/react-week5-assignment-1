import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CategoriesContainer from './CategoriesContainer';

import { loadCategories } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <h1>TITLE</h1>
      <CategoriesContainer />
    </>
  );
}
