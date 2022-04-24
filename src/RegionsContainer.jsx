import { useDispatch, useSelector } from 'react-redux';

import List from './List';

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
    <List
      list={regions}
      onSelect={onSelect}
      selectedId={selectRegionId}
    />
  );
}
