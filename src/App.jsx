import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRegions } from './actions';

import RegionsContainer from './RegionsContainer';
import Categories from './Categories';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RegionsContainer />
      <Categories />
    </>
  );
}
