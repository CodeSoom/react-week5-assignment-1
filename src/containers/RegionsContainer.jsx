import { useSelector, useDispatch } from 'react-redux';

import Regions from '../components/Regions';
import { changeRestaurantField } from '../actions';

export default function RegionsContainer({ restaurant }) {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const handleClick = ({ name, value }) => {
    dispatch(changeRestaurantField({ name, value }));
  };

  return (
    <Regions regions={regions} onClick={handleClick} restaurant={restaurant} />
  );
}
