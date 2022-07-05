import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRegions } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({ regions: state.regions }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRegions());
  }, []);

  // TODO: setRegion 구현 필요
  const handleClickRegion = (region) => console.log(region);

  return (
    <Regions regions={regions} onClickRegion={handleClickRegion} />
  );
}
