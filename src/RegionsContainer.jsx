import { useDispatch, useSelector } from 'react-redux';

import { setRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { region, regions } = useSelector((state) => state);

  const handleClickSelectRegion = (e) => {
    dispatch(setRegion(e.target.name));
  };

  return (
    <Regions region={region} regions={regions} onClickSelectRegion={handleClickSelectRegion} />
  );
}
