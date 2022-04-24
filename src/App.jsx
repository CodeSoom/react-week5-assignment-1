import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import {
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <CategoriesContainer />
  );
}
