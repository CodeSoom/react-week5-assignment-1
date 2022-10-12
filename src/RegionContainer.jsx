import { useDispatch, useSelector } from 'react-redux';
import { setSelectRegionId } from './actions';

import Regions from './Regions';

export default function RegionContainer() {
  const dispatch = useDispatch();
  const { regions, selectRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectRegionId: state.selectRegionId,
  }));

  const handleClick = (regionId) => {
    dispatch(setSelectRegionId(regionId));
  };

  return (
    <Regions
      regions={regions}
      handleClick={handleClick}
      selectRegionId={selectRegionId}
    />
  );
}
