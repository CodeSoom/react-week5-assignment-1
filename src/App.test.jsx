import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import REGIONS from './fixtures/regions';
import CATEGORIES from './fixtures/categories';
import RESTAURANTS from './fixtures/restaurants';

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
    categories: given.categories,
    restaurants: given.restaurants,
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

  context('with categories', () => {
    it('renders categories', () => {
      given('categories', () => CATEGORIES);

      const { container } = renderApp();

      const category = given.categories[0];

      expect(container).toHaveTextContent(category.name);
    });
  });

  context('with restaurants', () => {
    given('restaurants', () => RESTAURANTS);

    it('renders restaurants', () => {
      const { container } = renderApp();

      RESTAURANTS.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
      });
    });
  });

  context('without restaurants', () => {
    given('restaurants', () => []);

    it('renders "레스토랑을 불러오지 못했습니다."', () => {
      const { getByText } = renderApp();

      expect(getByText('레스토랑을 불러오지 못했습니다.')).toBeInTheDocument();
    });
  });
});
