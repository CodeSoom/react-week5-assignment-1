import { useSelector, useDispatch } from 'react-redux';

import { selectRegion } from '../store/actions';

import Regions from '../components/Regions';

export default function RegionsContainer() {
  const { regions, selectedRegionId } = useSelector((state) => ({
    regions: state.regions,
    selectedRegionId: state.selectedRegionId,
  }));

  const dispatch = useDispatch();

  const handleSelectRegion = (regionId) => {
    dispatch(selectRegion(regionId));
  };

  return (
    <>
      <Regions
        regions={regions}
        selectedRegionId={selectedRegionId}
        selectRegion={handleSelectRegion}
      />
    </>
  );
}
