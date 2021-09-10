import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from '../presentational/Regions';

import { loadRegions, updateCheckedElement } from '../actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { checkedRegion, regions } = useSelector((state) => ({
    checkedRegion: state.checkedRegion,
    regions: state.regions,
  }));

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function handleClickRegion(name, value) {
    dispatch(updateCheckedElement(name, value));
  }

  return (
    <Regions
      regions={regions}
      handleClickRegion={handleClickRegion}
      checkedElement={checkedRegion}
    />
  );
}
