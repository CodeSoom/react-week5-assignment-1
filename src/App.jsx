import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setRegions,
} from './actions';
import Regions from './components/Regions';

export default function App() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regions));
  }, []);

  return (
    <Regions regions={regions} />
  );
}
