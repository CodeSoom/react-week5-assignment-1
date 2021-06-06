import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
} from './actions';

import Region from './Region';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
  }

  return <Region regions={regions} onClick={handleClick} selectedRegion={selectedRegion} />;
}
