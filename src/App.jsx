import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadRegions,
} from './store/async-actions';

import RegionsContainer from './containers/RegionsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RegionsContainer />
    </>
  );
}
