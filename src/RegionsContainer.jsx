import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantSelectorButtons from './RestaurantSelectorButtons';

import {
  loadRegions,
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, region } = useSelector((state) => ({
    regions: state.regions,
    region: state.region,
  }));

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function handleRegionClick(regionName) {
    dispatch(selectRegion(regionName));
  }

  return (
    <RestaurantSelectorButtons
      list={regions}
      selectedItemName={region.name}
      onClick={handleRegionClick}
    />
  );
}
