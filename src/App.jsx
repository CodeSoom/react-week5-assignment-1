import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';
import CategoriesContainer from './CategoriesContainer';

import regions from '../fixtures/region';
import categories from '../fixtures/categories';

import {
  loadCategories,
  setRegions,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regions));
    dispatch(loadCategories(categories));
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
    </div>
  );
}
