import { render } from '@testing-library/react';

import regions from '../fixtures/regions';

import Regions from './Regions';

describe('Regions', () => {
  it('renders regions', () => {
    const { container } = render((
      <Regions
        regions={regions}
      />
    ));

    regions
      .map((region) => region.name)
      .forEach(
        (regionName) => expect(container).toHaveTextContent(regionName),
      );
  });
});
