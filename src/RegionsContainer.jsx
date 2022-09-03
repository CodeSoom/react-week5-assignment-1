import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionsContainer({ onClick }) {
  const { regions, filter } = useSelector((state) => ({
    regions: state.regions,
    filter: state.filter,
  }));

  return (
    <Regions
      regions={regions}
      onClick={onClick}
      regionName={filter.regionName}
    />
  );
}
