import { useDispatch, useSelector } from 'react-redux';

import { setRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => state);

  const handleClickSelectRegion = (e) => {
    dispatch(setRegion(e.target.value));
  };

  return (
    <Regions regions={regions} onClickSelectRegion={handleClickSelectRegion} />
  );
}
