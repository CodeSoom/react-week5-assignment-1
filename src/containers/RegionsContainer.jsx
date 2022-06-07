import { useDispatch, useSelector } from 'react-redux';

import { changeRegionName } from '../actions';

import Regions from '../components/Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionName } = useSelector((state) => state);

  const handleClickChangeRegionName = (regionName) => {
    dispatch(changeRegionName(regionName));
  };

  return (
    <>
      <Regions
        regions={regions}
        changeRegionName={selectedRegionName}
        onClick={handleClickChangeRegionName}
      />
    </>
  );
}
