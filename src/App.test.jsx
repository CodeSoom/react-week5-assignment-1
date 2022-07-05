import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import App from './App';

import REGIONS from './fixtures/regions';

jest.mock('react-redux');

describe('<App />', () => {
  given('regions', () => []);

  useSelector.mockImplementation((selector) => selector({
    regions: given.regions,
  }));

  const renderApp = () => render((<App />));

  context('with regions', () => {
    it('renders regions', () => {
      given('regions', () => REGIONS);

      const { container } = renderApp();

      const region = given.regions[0];

      expect(container).toHaveTextContent(region.name);
    });
  });
});
