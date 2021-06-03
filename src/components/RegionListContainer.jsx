import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../redux_module/asyncActions';

import { selectRegion } from '../redux_module/selectedSlice';
import ButtonList from './ButtonList';

export default function RegionListContainer() {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.groups.regions);
  const category = useSelector((state) => state.selected.category);

  const selectedRegionName = useSelector((state) => state.selected.region);

  const handleClick = (region) => {
    dispatch(selectRegion(region));
    dispatch(loadRestaurants(region, category.id));
  };

  return (
    <ButtonList
      names={regions}
      onClick={handleClick}
      selected={selectedRegionName}
    />
  );
}
