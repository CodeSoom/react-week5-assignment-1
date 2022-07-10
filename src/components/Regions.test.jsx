import { fireEvent, render } from '@testing-library/react';

import Regions from './Regions';

import REGIONS from '../fixtures/regions';

describe('<Regions />', () => {
  const handleSelectRegion = jest.fn();

  const renderRegions = ({ regions = [], selectedRegionId = null }) => render((<Regions
    regions={regions}
    selectedRegionId={selectedRegionId}
    selectRegion={handleSelectRegion}
  />));

  beforeEach(() => {
    handleSelectRegion.mockClear();
  });

  context('without regions', () => {
    it('renders "지역을 불러오지 못했습니다."', () => {
      const { getByText } = renderRegions({ regions: [] });

      expect(getByText('지역을 불러오지 못했습니다.')).toBeInTheDocument();
    });
  });

  context('with regions', () => {
    it('renders regions', () => {
      const { container } = renderRegions({ regions: REGIONS });

      REGIONS.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      });
    });

    describe('click region', () => {
      it('calls handleSelectRegion', () => {
        const region = REGIONS[0];

        const { getByText } = renderRegions({ regions: REGIONS });

        expect(handleSelectRegion).not.toBeCalled();

        fireEvent.click(getByText(region.name));

        expect(handleSelectRegion).toBeCalledWith(region);
      });
    });
  });

  context('with selected region id', () => {
    it('selected region is shown', () => {
      const region = REGIONS[0];

      const { container } = renderRegions({
        regions: REGIONS,
        selectedRegionId: region.id,
      });

      expect(container).toHaveTextContent(`${region.name}(V)`);
    });
  });

  context('without selected region id', () => {
    it('selected region is not shown', () => {
      const { container } = renderRegions({
        regions: REGIONS,
        selectedRegionId: null,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
