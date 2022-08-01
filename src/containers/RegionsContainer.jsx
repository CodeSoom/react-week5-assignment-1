import { useSelector, useDispatch } from 'react-redux';

import { selectRegion } from '../store/actions';

import Regions from '../components/Regions';

export default function RegionsContainer() {
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  const dispatch = useDispatch();

  const handleSelectRegion = (regionId) => {
    dispatch(selectRegion(regionId));
  };

  return (
    <>
      <Regions
        regions={regions}
        selectedRegion={selectedRegion}
        selectRegion={handleSelectRegion}
      />
    </>
  );
}
