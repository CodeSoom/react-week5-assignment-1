import Regions from './Regions';

import { regions } from '../__fixtures__/list';

export default function RegionsContainer() {
  return (
    <Regions
      regions={regions}
    />
  );
}
