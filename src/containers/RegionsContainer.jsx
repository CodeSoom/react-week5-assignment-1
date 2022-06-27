import { useSelector, useDispatch } from 'react-redux';

import Regions from '../components/Regions';
import { changeRestaurantField, loadRestaurants } from '../actions';

import { get } from '../utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector((get('regions')));
  const restaurant = useSelector((get('restaurant')));

  const handleClick = ({ name, value }) => {
    dispatch(changeRestaurantField({ name, value }));
    dispatch(loadRestaurants());
  };

  return (
    <Regions regions={regions} onClick={handleClick} restaurant={restaurant} />
  );
}
