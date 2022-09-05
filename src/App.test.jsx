import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('App', () => {
  given('state', () => ({
    regions,
    categories,
    restaurants: given.restaurants,
    filter: given.filter,
  }));

  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(given.state));

    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  context('without filter field at least one', () => {
    it('loads regions & categories from API', () => {
      given('restaurants', () => []);
      given('filter', () => ({
        regionName: null,
        categoryId: null,
      }));

      render((
        <App />
      ));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('with full filter field', () => {
    it('loads restaurants from API', () => {
      given('restaurants', () => []);
      given('filter', () => ({
        regionName: regions[0].name,
        categoryId: categories[0].id,
      }));

      render((
        <App />
      ));

      expect(dispatch).toBeCalledTimes(3);
    });
  });

  it('renders regions', () => {
    given('restaurants', () => []);
    given('filter', () => ({
      regionName: null,
      categoryId: null,
    }));

    const { getAllByRole } = render((
      <App />
    ));

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });
    // expect(getAllByRole('listitem')).toHaveLength(regions.length);
  });

  it('renders region button to listent to click event', () => {
    given('restaurants', () => []);
    given('filter', () => ({
      regionName: null,
      categoryId: null,
    }));

    const { getAllByRole } = render((
      <App />
    ));

    const regionButtons = getAllByRole('button');

    regionButtons.forEach((regionButton) => {
      fireEvent.click(regionButton);

      expect(dispatch).toBeCalledWith({
        type: 'applyFilter',
        payload: {
          field: 'regionName',
          content: regionButton.textContent,
        },
      });
    });
  });

  it('renders Categories', () => {
    given('restaurants', () => []);
    given('filter', () => ({
      regionName: null,
      categoryId: null,
    }));

    const { getAllByRole } = render((
      <App />
    ));

    categories.forEach((category, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(category.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(categories.length);
  });

  it('renders category button to listent to click event', () => {
    given('restaurants', () => []);
    given('filter', () => ({
      regionName: null,
      categoryId: null,
    }));

    const { getAllByRole } = render((
      <App />
    ));

    const categoriesButtons = getAllByRole('button');

    categories.forEach((category, index) => {
      fireEvent.click(categoriesButtons[index]);

      expect(dispatch).toBeCalledWith({
        type: 'applyFilter',
        payload: {
          field: 'categoryId',
          content: category.id,
        },
      });
    });
  });

  it('renders Restaurants', () => {
    given('regions', () => []);
    given('categories', () => []);
    given('restaurants', () => restaurants);
    given('filter', () => ({
      regionName: null,
      categoryId: null,
    }));

    const { getAllByRole } = render((
      <App />
    ));

    restaurants.forEach((restaurant, index) => {
      expect(getAllByRole('listitem')[index].textContent).toBe(restaurant.name);
    });
  });
});
