import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRegions } from './async-actions';
import Regions from './Regions';

const RegionsContainer = () => {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.regions);

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions regions={regions} />
  );
};

export default RegionsContainer;
