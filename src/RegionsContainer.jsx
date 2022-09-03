import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  applyRegion,
} from './actions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClick(region) {
    dispatch(applyRegion(region));
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
    />
  );
}
