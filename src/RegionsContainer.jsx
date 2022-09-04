import { useDispatch, useSelector } from 'react-redux';
import { selectRegion } from './actions';
import Regions from './Regions';

export default function RegionsContainer() {
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));

  const dispatch = useDispatch();

  const handleClick = (region) => dispatch(selectRegion(region));

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onRegionClick={handleClick}
    />
  );
}
