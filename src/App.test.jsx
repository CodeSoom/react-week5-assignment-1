import { render } from '@testing-library/react';
import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('App', () => {
  given('state', () => ({
    regions: given.regions,
    categories: given.categories,
    restaurants: given.restaurants,
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
    given('restaurants', () => []);

    render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(2);
  });

  it('renders regions', () => {
    given('regions', () => regions);
    given('categories', () => []);
    given('restaurants', () => []);

    const { getAllByRole } = render((
      <App />
    ));

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(regions.length);
  });

  it('renders Categories', () => {
    given('regions', () => []);
    given('categories', () => categories);
    given('restaurants', () => []);

    const { getAllByRole } = render((
      <App />
    ));

    categories.forEach((category, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(category.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(categories.length);
  });

  it('renders Restaurants', () => {
    given('regions', () => []);
    given('categories', () => []);
    given('restaurants', () => restaurants);

    const { getAllByRole } = render((
      <App />
    ));

    restaurants.forEach((restaurant, index) => {
      expect(getAllByRole('listitem')[index].textContent).toBe(restaurant.name);
    });
  });
});
