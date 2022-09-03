import { useSelector } from 'react-redux';
import Regions from './Regions';

export default function RegionsContainer() {
  const { regions, selectedRegion } = useSelector((state) => ({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
  }));
  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
    />
  );
}
