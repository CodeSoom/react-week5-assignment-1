import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import { setCategories } from './action';
import { CATEGORIES } from './fixture';

import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch;

  const loadCategories = () => {
    dispatch(setCategories(CATEGORIES));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <CategoriesContainer />
    </>
  );
}
