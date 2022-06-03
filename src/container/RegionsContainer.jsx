import { useSelector } from 'react-redux';

import Regions from '../component/Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return <Regions regions={regions} />;
}
