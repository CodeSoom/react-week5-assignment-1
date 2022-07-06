import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import RegionsContainer from './RegionsContainer';

import REGIONS from '../fixtures/regions';

jest.mock('react-redux');

describe('<RegionsContainer />', () => {
  const renderRegionsContainer = () => render((<RegionsContainer />));

  useSelector.mockImplementation((selector) => selector({
    regions: given.regions,
  }));

  context('without regions', () => {
    given('regions', () => []);

    it('nothing renders', () => {
      const { queryAllByRole } = renderRegionsContainer();

      expect(queryAllByRole('listitem')).toHaveLength(0);
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
  });
});
