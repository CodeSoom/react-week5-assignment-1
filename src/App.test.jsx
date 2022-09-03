import { render } from '@testing-library/react';
import { given } from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('App', () => {
  given('state', () => ({
    regions: given.regions,
    categories: given.categories,
  }));

  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(given.state));

    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads regions & categories from API', () => {
    given('regions', () => []);
    given('categories', () => []);

    render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(2);
  });

  it('renders regions', () => {
    given('regions', () => regions);
    given('categories', () => []);

    const { getAllByRole } = render((
      <App />
    ));

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });
  });

  it('renders Categories', () => {
    given('regions', () => []);
    given('categories', () => categories);

    const { getAllByRole } = render((
      <App />
    ));

    categories.forEach((category, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(category.name);
    });
  });
});
