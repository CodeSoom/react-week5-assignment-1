import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants, setRegionName } from './actions';

import Regions from './Regions';

export default function RegionContainer() {
  const dispatch = useDispatch();
  const { regions, regionName, categoryId } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.regionName,
    categoryId: state.categoryId,
  }));

  const handleClick = (clickedRegionName) => {
    dispatch(setRegionName(clickedRegionName));
    dispatch(loadRestaurants(clickedRegionName, categoryId));
  };

  return (
    <Regions
      regions={regions}
      handleClick={handleClick}
      regionName={regionName}
    />
  );
}
