import Regions from './Regions';

import { regions } from '../__fixtures__/list';

export default function RegionsContainer() {
  const selectedRegion = '';

  return (
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
    />
  );
}
