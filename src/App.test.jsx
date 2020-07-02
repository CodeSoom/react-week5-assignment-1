import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRegions, getRegions, getRestaurants, getCategories, updateCategories,
} from './actions';

import regionsFixture from './__fixtures__/regions';
import categoriesFixture from './__fixtures__/categories';
import restaurantsFixture from './__fixtures__/restaurants';

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
    regions: regionsFixture,
    categories: categoriesFixture,
    restaurants: restaurantsFixture,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('fetch regions', () => {
    // given
    const getRegionsAction = jest.fn();
    getRegions.mockImplementation(() => getRegionsAction);
    // when
    renderApp();
    // then
    expect(dispatch).toBeCalledWith(getRegionsAction);
  });

  it('fetch categories', () => {
    // given
    const getCategoriesAction = jest.fn();
    getCategories.mockImplementation(() => getCategoriesAction);
    // when
    renderApp();
    // then
    expect(dispatch).toBeCalledWith(getCategoriesAction);
  });

  it('renders region buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    regionsFixture.forEach(({ name }) => {
      expect(getButtonByName(name)).toBeInTheDocument();
    });
  });

  it('renders category buttons', () => {
    // when
    const { getButtonByName } = renderApp();
    // then
    categoriesFixture.forEach(({ name }) => {
      expect(getButtonByName(name)).toBeInTheDocument();
    });
  });

  it('renders restaurant list', () => {
    // when
    const { getByText } = renderApp();
    // then
    restaurantsFixture.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  describe('click button', () => {
    const getRestaurantsAction = jest.fn();
    getRestaurants.mockImplementation(() => getRestaurantsAction);

    beforeEach(() => {
      getRestaurantsAction.mockClear();
    });

    it('click region button', () => {
      // given
      const updateRegionsAction = jest.fn();
      updateRegions.mockImplementation(() => updateRegionsAction);
      const region = regionsFixture[0];
      // when
      const { getButtonByName } = renderApp();
      fireEvent.click(getButtonByName(region.name));
      // then
      expect(dispatch).toBeCalledWith(updateRegionsAction);
      expect(dispatch).toBeCalledWith(getRestaurantsAction);
      expect(updateRegions).toBeCalledWith(region.id);
    });

    it('click category button', () => {
      // given
      const updateCategoriesAction = jest.fn();
      updateCategories.mockImplementation(() => updateCategoriesAction);
      const category = categoriesFixture[0];
      // when
      const { getButtonByName } = renderApp();
      fireEvent.click(getButtonByName(category.name));
      // then
      expect(dispatch).toBeCalledWith(updateCategoriesAction);
      expect(dispatch).toBeCalledWith(getRestaurantsAction);
      expect(updateCategories).toBeCalledWith(category.id);
    });
  });
});
