import { useDispatch, useSelector } from 'react-redux';

import { changeRegionName } from '../actions';

import Regions from '../components/Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, regionName } = useSelector((state) => state);

  const handleClickChangeRegionName = (regionNameParams) => {
    dispatch(changeRegionName(regionNameParams));
  };

  return (
    <>
      <Regions
        regions={regions}
        changeRegionName={regionName}
        onClick={handleClickChangeRegionName}
      />
    </>
  );
}
