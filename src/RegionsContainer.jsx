import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

import {
  selectRegion,
} from './actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, selectRegionId } = useSelector((selector) => ({
    regions: selector.regions,
    selectRegionId: selector.selectRegionId,
  }));

  function onSelect(id) {
    dispatch(selectRegion({ selectRegionId: id }));
  }

  return (
    <Regions
      regions={regions}
      onSelect={onSelect}
      selectRegionId={selectRegionId}
    />
  );
}
