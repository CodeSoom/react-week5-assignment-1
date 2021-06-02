import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from '../redux_module/selectedSlice';
import ButtonList from './ButtonList';

export default function RegionListContainer() {
  const dispatch = useDispatch();

  const names = useSelector((state) => state.groups.regions);
  const selected = useSelector((state) => state.selected.region);
  const handleClick = (value) => dispatch(selectRegion(value));

  return (
    <ButtonList
      names={names}
      onClick={handleClick}
      selected={selected}
    />
  );
}
