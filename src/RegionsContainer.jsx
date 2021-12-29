import { useSelector, useDispatch } from 'react-redux';

import { setSelectedRegion } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegion } = useSelector((state) => state);

  const handleChangeSelectedRegion = (regionName) => {
    dispatch(setSelectedRegion(regionName));
  };

  return (
    <>
      <Regions
        regions={regions}
        selectedRegion={selectedRegion}
        onClick={handleChangeSelectedRegion}
      />
    </>
  );
}
