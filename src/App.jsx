import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRegions } from './actions';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
    </>
  );
}
