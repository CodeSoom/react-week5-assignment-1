import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Regions from '../presentational/Regions';

import { loadRegions, updateCheckedItem } from '../actions';

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
    dispatch(updateCheckedItem(name, value));
  }

  return (
    <Regions
      regions={regions}
      handleClickRegion={handleClickRegion}
      checkedRegion={checkedRegion}
    />
  );
}
