import { useDispatch } from 'react-redux';

import { setRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const handleClickSelectRegion = (e) => {
    dispatch(setRegion(e.target.value));
  };

  return (
    <Regions onClickSelectRegion={handleClickSelectRegion} />
  );
}
