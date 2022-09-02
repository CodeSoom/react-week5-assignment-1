import { render } from '@testing-library/react';

import given from 'given2';

import Regions from './Regions';

import { regions } from '../__fixtures__/data';

describe('<Regions />', () => {
  given('regions', () => regions);
  given('selectedRegion', () => undefined);

  const renderRegions = () => render(
    <Regions
      regions={given.regions}
      selectedRegion={given.selectedRegion}
    />,
  );

  context('without selectedRegion', () => {
    given('selectedRegion', () => undefined);

    it('renders only regions', () => {
      const { container } = renderRegions();

      regions.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      });
    });
  });

  context('with selectedRegion', () => {
    given('selectedRegion', () => regions[0].name);
    it('renders region with check mark(V)', () => {
      const { getByText } = renderRegions();

      expect(getByText('서울(V)')).not.toBeNull();
    });
  });
});
