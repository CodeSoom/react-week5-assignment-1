import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRegions, getRegions, getRestaurants, getCategories, updateCategories,
} from './actions';

import regions from './__fixtures__/regions';
import categories from './__fixtures__/categories';
import restaurants from './__fixtures__/restaurants';

import App from './App';

jest.mock('react-redux');
jest.mock('./actions.js');

function renderApp() {
  render(<App />);
  return {
    getButtonByName: (name) => screen.getByRole('button', { name }),
    getByText: (text) => screen.getByText(text),
  };
}

describe('<App />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    restaurants,
  }));

  const getRegionsAction = jest.fn();
  getRegions.mockImplementation(() => getRegionsAction);
  const getCategoriesAction = jest.fn();
  getCategories.mockImplementation(() => getCategoriesAction);
  const getRestaurantsAction = jest.fn();
  getRestaurants.mockImplementation(() => getRestaurantsAction);
  const updateRegionsAction = jest.fn();
  updateRegions.mockImplementation(() => updateRegionsAction);
  const updateCategoriesAction = jest.fn();
  updateCategories.mockImplementation(() => updateCategoriesAction);

  beforeEach(() => {
    dispatch.mockClear();
    getRegionsAction.mockClear();
    getCategoriesAction.mockClear();
    getRestaurantsAction.mockClear();
    updateRegionsAction.mockClear();
    updateCategoriesAction.mockClear();
  });

  it('fetch regions', () => {
    // when
    renderApp();
    // then
    expect(dispatch).toBeCalledWith(getRegionsAction);
  });

  it('fetch categories', () => {
    // when
    renderApp();
    // then
    expect(dispatch).toBeCalledWith(getCategoriesAction);
  });

  it('renders region buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    regions.forEach(({ name }) => {
      expect(getButtonByName(name)).toBeInTheDocument();
    });
  });

  it('renders category buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    categories.forEach(({ name }) => {
      expect(getButtonByName(name)).toBeInTheDocument();
    });
  });

  it('renders restaurant list', () => {
    // when
    const { getByText } = renderApp();
    // then
    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  describe('click button', () => {
    it('click region button', () => {
      // when
      const { getButtonByName } = renderApp();
      fireEvent.click(getButtonByName(regions[0].name));
      // then
      expect(dispatch).toBeCalledWith(updateRegionsAction);
      expect(dispatch).toBeCalledWith(getRestaurantsAction);
      expect(updateRegions).toBeCalledWith(regions[0].id);
    });

    it('click category button', () => {
      // when
      const { getButtonByName } = renderApp();
      fireEvent.click(getButtonByName(categories[0].name));
      // then
      expect(dispatch).toBeCalledWith(updateCategoriesAction);
      expect(dispatch).toBeCalledWith(getRestaurantsAction);
      expect(updateCategories).toBeCalledWith(categories[0].id);
    });
  });
});
