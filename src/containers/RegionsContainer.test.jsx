import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import RegionsContainer from './RegionsContainer';

import REGIONS from '../fixtures/regions';

import { selectRegion } from '../store/actions';

jest.mock('react-redux');

describe('<RegionsContainer />', () => {
  const renderRegionsContainer = () => render((<RegionsContainer />));

  useSelector.mockImplementation((selector) => selector({
    regions: given.regions,
    selectedRegionId: given.selectedRegionId,
  }));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('without regions', () => {
    given('regions', () => []);

    it('renders "지역을 불러오지 못했습니다."', () => {
      const { getByText } = renderRegionsContainer();

      expect(getByText('지역을 불러오지 못했습니다.')).toBeInTheDocument();
    });
  });

  context('with regions', () => {
    given('regions', () => REGIONS);

    it('renders regions', () => {
      const { container } = renderRegionsContainer();

      given.regions.forEach((region) => {
        expect(container).toHaveTextContent(region.name);
      });
    });

    describe('click region', () => {
      it('dispatch selectRegion', () => {
        const region = REGIONS[0];

        const { getByText } = renderRegionsContainer();

        expect(dispatch).not.toBeCalled();

        fireEvent.click(getByText(region.name));

        expect(dispatch).toBeCalledWith(selectRegion(region.id));
      });
    });

    context('with selected region id', () => {
      it('selected region is shown', () => {
        const region = REGIONS[0];

        given('selectedRegionId', () => region.id);

        const { container } = renderRegionsContainer();

        expect(container).toHaveTextContent(`${region.name}(V)`);
      });
    });

    context('without selected region id', () => {
      it('selected region is not shown', () => {
        given('selectedRegionId', () => null);

        const { container } = renderRegionsContainer();

        expect(container).not.toHaveTextContent('(V)');
      });
    });
  });
});
