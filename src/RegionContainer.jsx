import { useDispatch, useSelector } from 'react-redux';
import Regions from './Regions';
import { setRegion } from './actions';

export default function RegionContainer() {
  const { regions } = useSelector((state) => ({ regions: state.regions }));
  const dispatch = useDispatch();
  const onClick = (name) => {
    dispatch(setRegion(name));
  };
  return (
    <Regions regions={regions} onClick={onClick} />
  );
}
