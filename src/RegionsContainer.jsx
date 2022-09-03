import { useDispatch, useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  function handleClick() {
    dispatch();
  }

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
    />
  );
}
