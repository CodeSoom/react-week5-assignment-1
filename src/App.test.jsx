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

function renderApp() {
  return render(<App />);
}

describe('<App />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  describe('render App', () => {
    beforeEach(() => {
      mockUseSelector();
    });

    it('shows regions', () => {
      const { queryByRole } = renderApp();

      regions.forEach((region) => {
        expect(queryByRole('button', { name: region.name })).not.toBeNull();
      });

      expect(dispatch).toBeCalledTimes(2);
    });

    context('without selectedCategory', () => {
      beforeEach(() => {
        mockUseSelector();
      });

      it('shows categories', () => {
        const { queryByRole } = renderApp();

        categories.forEach((category) => {
          expect(queryByRole('button', { name: category.name })).not.toBeNull();
        });

        expect(dispatch).toBeCalledTimes(2);
      });
    });

    context('with selectedCategory', () => {
      beforeEach(() => {
        mockUseSelector({
          ...initState,
          selectedCategory: '한식',
        });
      });

      it('shows a category with a selection mark', () => {
        const { queryByRole } = renderApp();

        expect(queryByRole('button', { name: '한식(V)' })).not.toBeNull();

        expect(dispatch).toBeCalledTimes(2);
      });
    });
  });

  context('when the user selects region', () => {
    beforeEach(() => {
      mockUseSelector();
    });

    it('shows a region with a selection mark', () => {
      const { getByRole } = renderApp();

      regions.forEach((region) => {
        fireEvent.click(getByRole('button', { name: region.name }));
        expect(dispatch).toBeCalledWith(selectRegion(region.name));
      });
    });
  });

  context('when the user selects category', () => {
    beforeEach(() => {
      mockUseSelector();
    });

    it('shows a category with a selection mark', () => {
      const { getByRole } = renderApp();

      categories.forEach((category) => {
        fireEvent.click(getByRole('button', { name: category.name }));
        expect(dispatch).toBeCalledWith(selectCategory(category.name));
      });
    });
  });

  context('when the user selects region and category', () => {
    beforeEach(() => {
      mockUseSelector({
        ...initState,
        restaurants,
      });
    });

    it('shows restaurants', () => {
      const { getByRole, queryByText } = renderApp();

      fireEvent.click(getByRole('button', { name: '서울' }));
      fireEvent.click(getByRole('button', { name: '한식' }));

      expect(dispatch).toBeCalledTimes(6);

      restaurants.forEach((restaurant) => {
        expect(queryByText(restaurant.name)).not.toBeNull();
      });
    });
  });
});
