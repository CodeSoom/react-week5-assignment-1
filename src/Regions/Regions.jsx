import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentRegionId } from '../app/actions';
import { loadRegions } from '../app/asyncActions';

import Buttons from '../Buttons/Buttons';

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
      targetName="currentRegionId"
      currentId={currentRegionId}
      onClick={handleClickRegion}
    />
  );
}
