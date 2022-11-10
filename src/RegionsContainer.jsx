import { useSelector, useDispatch } from 'react-redux';

import Regions from './Regions';

import { selectRegion } from './actions';

export default function RegionContainer() {
  const dispatch = useDispatch();

  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selectedRegionId,
  }));

  function handleClickCheck(region) {
    dispatch(selectRegion(region));
  }

  return (
    <Regions
      regions={regions}
      selectedRegionId={selectedRegionId}
      onClick={handleClickCheck}
    />
  );
}
