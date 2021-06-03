import { useDispatch, useSelector } from 'react-redux';
import { loadRestaurants } from '../redux_module/asyncActions';

import { selectRegion } from '../redux_module/RestaurantSlice';
import ButtonList from './ButtonList';

export default function RegionListContainer() {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.restaurant.regions);
  const category = useSelector((state) => state.restaurant.selected.category);

  const selectedRegionName = useSelector((state) => state.restaurant.selected.region);

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
