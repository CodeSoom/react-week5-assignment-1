import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants, selectRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, region } = useSelector((state) => state);

  const handleClick = (regionId) => {
    dispatch(selectRegion({ regionId }));
    dispatch(loadRestaurants());
  };

  return (
    <Regions regions={regions} region={region} handleClick={handleClick} />
  );
}
