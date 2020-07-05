import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRegions, getRegions, getRestaurants, getCategories, updateCategories,
} from './actions';

import App from './App';

import regions from './__fixtures__/regions';
import categories from './__fixtures__/categories';
import restaurants from './__fixtures__/restaurants';

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

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions,
      categories,
      restaurants,
    }));
  });

  it('fetch regions', () => {
    // when
    renderApp();
    // then
    expect(getRegions).toBeCalled();
  });

  it('fetch categories', () => {
    // when
    renderApp();
    // then
    expect(getCategories).toBeCalled();
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
      expect(updateRegions).toBeCalled();
      expect(getRestaurants).toBeCalled();
    });

    it('click category button', () => {
      // when
      const { getButtonByName } = renderApp();
      fireEvent.click(getButtonByName(categories[0].name));
      // then
      expect(updateCategories).toBeCalled();
      expect(getRestaurants).toBeCalled();
    });
  });
});
