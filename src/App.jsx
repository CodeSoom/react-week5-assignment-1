import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import RegionsContainer from './RegionsContainer';

import {
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <p />
      <CategoriesContainer />
    </div>
  );
}
