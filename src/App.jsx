import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import CategoriesContainer from './CategoriesContainer';

import { setCategories } from './actions';

import { fetchCategories } from './services/api';

export default function App() {
  const dispatch = useDispatch();

  const loadCategories = async () => {
    const response = await fetchCategories();
    dispatch(setCategories(response));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <>
      <h1>TITLE</h1>
      <CategoriesContainer />
    </>
  );
}
