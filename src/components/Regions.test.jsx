import { render } from '@testing-library/react';

import Regions from './Regions';

import REGIONS from '../fixtures/regions';

describe('<Regions />', () => {
  const renderRegions = (regions) => render((<Regions regions={regions} />));

  context('without regions', () => {
    it('nothing renders', () => {
      const { queryAllByRole } = renderRegions([]);

      expect(queryAllByRole('listitem')).toHaveLength(0);
    });
  });

  context('with regions', () => {
    it('renders regions', () => {
      const { container } = renderRegions(REGIONS);

      REGIONS.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      });
    });
  });
});
