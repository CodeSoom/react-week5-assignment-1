import { render } from '@testing-library/react';

import Regions from './Regions';

import REGIONS from '../fixtures/regions';

describe('<Regions />', () => {
  const renderRegions = (regions) => render((<Regions regions={regions} />));

  context('without regions', () => {
    it('renders "지역을 불러오지 못했습니다."', () => {
      const { getByText } = renderRegions([]);

      expect(getByText('지역을 불러오지 못했습니다.')).toBeInTheDocument();
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
