import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

import { regions, categories, restaurants } from '../__fixture__/data';

import { selectRegion, selectCategory } from './action';

jest.mock('react-redux');
jest.mock('./services/api');

const initState = {
  regions,
  selectedRegion: '',
  categories,
  selectedCategory: '',
  restaurants: [],
};

function mockUseSelector(state = initState) {
  useSelector.mockImplementation((selector) => selector({
    regions: state.regions,
    selectedRegion: state.selectedRegion,
    categories: state.categories,
    selectedCategory: state.selectedCategory,
    restaurants: state.restaurants,
  }));
}

const dispatch = jest.fn();

function renderApp() {
  return render(<App />);
}

describe('<App />', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  describe('render App', () => {
    it('shows regions', () => {
      mockUseSelector();
      const { queryByRole } = renderApp();

      regions.forEach((region) => {
        expect(queryByRole('button', { name: region.name })).not.toBeNull();
      });

      expect(dispatch).toBeCalledTimes(2);
    });

    context('without selectedCategory', () => {
      it('shows categories', () => {
        mockUseSelector();

        const { queryByRole } = renderApp();

        categories.forEach((category) => {
          expect(queryByRole('button', { name: category.name })).not.toBeNull();
        });

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('with selectedCategory', () => {
      it('shows a category with a selection mark', () => {
        mockUseSelector({
          ...initState,
          selectedCategory: '한식',
        });

        const { queryByRole } = renderApp();

        expect(queryByRole('button', { name: '한식(V)' })).not.toBeNull();

        expect(dispatch).toBeCalledTimes(2);
      });
    });
  });

  context('when the user selects region', () => {
    it('shows a region with a selection mark', () => {
      mockUseSelector();

      const { getByRole } = renderApp();

      regions.forEach((region) => {
        fireEvent.click(getByRole('button', { name: region.name }));
        expect(dispatch).toBeCalledWith(selectRegion(region.name));
      });
    });
  });

  context('when the user selects category', () => {
    it('shows a category with a selection mark', () => {
      mockUseSelector();

      const { getByRole } = renderApp();

      categories.forEach((category) => {
        fireEvent.click(getByRole('button', { name: category.name }));
        expect(dispatch).toBeCalledWith(selectCategory(category.name));
      });
    });
  });

  context('when the user selects region and category', () => {
    it('shows restaurants', () => {
      mockUseSelector({
        ...initState,
        restaurants,
      });

      const { getByRole, queryByText } = renderApp();

      fireEvent.click(getByRole('button', { name: '서울' }));
      fireEvent.click(getByRole('button', { name: '한식' }));

      expect(dispatch).toBeCalledTimes(5);

      restaurants.forEach((restaurant) => {
        expect(queryByText(restaurant.name)).not.toBeNull();
      });
    });
  });
});
