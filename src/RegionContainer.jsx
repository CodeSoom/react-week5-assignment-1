import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
} from './actions';

import { get } from './utils';

import Region from './Region';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
  }

  return <Region regions={regions} onClick={handleClick} selectedRegion={selectedRegion} />;
}
