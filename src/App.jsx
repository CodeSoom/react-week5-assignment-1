import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { setCategories } from './action';

import CategoriesContainer from './CategoriesContainer';
import { fetchCategories } from './services/api';

export default function App() {
  const dispatch = useDispatch;

  const loadCategories = async () => {
    const response = await fetchCategories();
    dispatch(setCategories(response));
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
