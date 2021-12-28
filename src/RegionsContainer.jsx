import { useSelector } from 'react-redux';

import Categories from './Categories';
import Regions from './Regions';

export default function RegionsContainer() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  return <Regions regions={regions} />;
}
