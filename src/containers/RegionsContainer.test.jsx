import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import RegionsContainer from './RegionsContainer';

import REGIONS from '../fixtures/regions';

jest.mock('react-redux');

describe('<RegionsContainer />', () => {
  given('regions', () => []);

  const renderRegionsContainer = () => render((<RegionsContainer />));

  useSelector.mockImplementation((selector) => selector({
    regions: given.regions,
  }));

  context('without regions', () => {
    it('nothing renders', () => {
      const { queryAllByRole } = renderRegionsContainer();

      expect(queryAllByRole('listitem')).toHaveLength(0);
    });
  });

  context('with regions', () => {
    it('renders regions', () => {
      given('regions', () => REGIONS);

      const { container } = renderRegionsContainer();

      const region = given.regions[0];

      expect(container).toHaveTextContent(region.name);
    });
  });
});
