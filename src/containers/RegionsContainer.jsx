import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRegions, setRegionActiveId } from '../actions';
import Regions from '../Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, activeId } = useSelector((state) => state.regions);

  const handleClick = (id) => {
    dispatch(setRegionActiveId(id));
  };

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <Regions
      regions={regions}
      activeId={activeId}
      onClick={handleClick}
    />
  );
}
