import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import REGIONS from './fixtures/regions';

import {
  loadRegions,
  loadCategories,
} from './store/async-actions';

import App from './App';

jest.mock('react-redux');
jest.mock('./store/async-actions');

describe('<App />', () => {
  given('regions', () => []);

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: given.regions,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderApp = () => render((<App />));

  it('load regions initially', () => {
    renderApp();

    expect(dispatch).toBeCalled();
    expect(loadRegions).toBeCalledTimes(1);
  });

  context('with regions', () => {
    it('renders regions', () => {
      given('regions', () => REGIONS);

      const { container } = renderApp();

      const region = given.regions[0];

      expect(container).toHaveTextContent(region.name);
    });
  });

  it('load categories initially', () => {
    renderApp();

    expect(dispatch).toBeCalled();
    expect(loadCategories).toBeCalledTimes(1);
  });
});
