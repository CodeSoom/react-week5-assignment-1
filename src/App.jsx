import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';
import CategoriesContainer from './CategoriesContainer';

import {
  setRegion,
} from './actions';

function loadRegion({ dispatch }) {
  const regions = [];
  dispatch(setRegion(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegion({ dispatch });
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
    </div>
  );
}
