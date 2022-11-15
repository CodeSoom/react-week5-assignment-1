import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
  loadRestaurants,
} from './actions';

import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  /* const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  })); */

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  //
  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Regions regions={regions} onClick={handleClick} selectedRegion={selectedRegion} />
  );
}
