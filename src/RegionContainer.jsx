import { useSelector } from 'react-redux';

import Regions from './Regions';

export default function RegionContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return (
    <Regions regions={regions} />
  );
}
