import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
import CategoriesContainer from './CategoriesContainer';

import { setCategories } from './actions';
import { CATEGORIES } from './fixtures';

export default function App() {
  const dispatch = useDispatch();

  const loadCategories = () => {
    dispatch(setCategories(CATEGORIES));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return <CategoriesContainer />;
}
