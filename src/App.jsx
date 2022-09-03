import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionContainer from './RegionContainer';
import CategoriesContainer from './CategoriesContainer';

import {
  setRegion,
} from './actions';

import { fetchRegions } from './services/api';

async function loadRegions({ dispatch }) {
  const regions = await fetchRegions();
  dispatch(setRegion(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
    </div>
  );
}
