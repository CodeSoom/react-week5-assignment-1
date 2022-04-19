import { useDispatch, useSelector } from 'react-redux';

import Regions from '../components/Regions';

import { updateRegionName } from '../redux/actions';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const { regions, regionName } = useSelector((state) => ({
    regions: state.regions,
    regionName: state.regionName,
  }));

  function handleRegionClick({ value }) {
    dispatch(updateRegionName({ regionName: value }));
  }

  return (
    <Regions
      regions={regions}
      regionName={regionName}
      onRegionClick={handleRegionClick}
    />
  );
}
