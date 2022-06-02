import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentRegionId, loadRegions } from './actions';

import Buttons from './Buttons';

export default function Regions() {
  const dispatch = useDispatch();

  const { regions, currentRegionId } = useSelector((state) => ({
    regions: state.regions,
    currentRegionId: state.currentRegionId,
  }));

  const handleClickRegion = (id) => {
    dispatch(setCurrentRegionId(id));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);
  return (
    <Buttons
      items={regions}
      name="currentRegionId"
      currentId={currentRegionId}
      onClick={handleClickRegion}
    />
  );
}
