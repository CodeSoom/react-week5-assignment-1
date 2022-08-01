import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRegions, setRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions, region } = useSelector((state) => (
    { regions: state.regions, region: state.region }
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  // TODO: setRegion 구현 필요
  const handleClickRegion = (regionValue) => dispatch(setRegion(regionValue));

  return (
    <Regions region={region} regions={regions} onClickRegion={handleClickRegion} />
  );
}
