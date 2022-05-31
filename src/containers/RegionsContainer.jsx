import { useDispatch, useSelector } from 'react-redux';

import Regions from '../components/Regions';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, changeRegionName } = useSelector((state) => state);

  const handleChangeRegionName = (regionName) => {
    dispatch(changeRegionName(regionName));
  };

  return (
    <>
      <Regions
        regions={regions}
        changeRegion={changeRegionName}
        onClick={handleChangeRegionName}
      />
    </>
  );
}
