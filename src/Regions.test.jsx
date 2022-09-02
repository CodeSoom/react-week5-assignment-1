import { render } from '@testing-library/react';

import Regions from './Regions';

import { regions } from '../__fixtures__/data';

describe('<Regions />', () => {
  context('without selectedRegion', () => {
    it('renders only regions', () => {
      const { container } = render(
        <Regions
          regions={regions}
          selectedRegion=""
        />,
      );

      regions.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      });
    });
  });

  context('with selectedRegion', () => {
    it('renders region with check mark(V)', () => {
      const { getByText } = render(
        <Regions
          regions={regions}
          selectedRegion="부산"
        />,
      );

      expect(getByText('부산(V)')).not.toBeNull();
    });
  });
});
