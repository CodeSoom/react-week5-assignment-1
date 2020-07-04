import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { regions, categories, restaurants } from '../__fixture__/data';

import { selectRegion, loadRestaurants } from './action';

jest.mock('react-redux');
jest.mock('./action.js');

const initState = {
  regions,
  selectedRegion: '',
  categories,
  selectedCategory: '',
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

function renderRegionsContainer() {
  return render(<RegionsContainer />);
}

describe('<RegionsContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  describe('render RegionsContainer', () => {
    context('without selectedRegion', () => {
      beforeEach(() => {
        mockUseSelector();
      });

      it('shows regions', () => {
        const { queryByRole } = renderRegionsContainer();

        regions.forEach((region) => {
          expect(queryByRole('button', { name: region.name })).not.toBeNull();
        });
      });
    });

    context('with selectedRegion', () => {
      beforeEach(() => {
        mockUseSelector({
          ...initState,
          selectedRegion: '서울',
        });
      });

      it('shows a region with a selection mark', () => {
        const { queryByRole } = renderRegionsContainer();

        expect(queryByRole('button', { name: '서울(V)' })).not.toBeNull();
      });
    });
  });

  context('when the user selects region & without selectedCategory', () => {
    beforeEach(() => {
      mockUseSelector({
        ...initState,
        categories,
        selectedCategory: '',
      });
    });

    it('run selectRegion action', () => {
      const { getByRole, queryByText } = renderRegionsContainer();

      fireEvent.click(getByRole('button', { name: '서울' }));
      expect(dispatch).toBeCalledWith(selectRegion('서울'));

      restaurants.forEach((restaurant) => {
        expect(queryByText(restaurant.name)).toBeNull();
      });
    });
  });

  context('when the user selects region & with selectedCategory', () => {
    beforeEach(() => {
      mockUseSelector({
        ...initState,
        categories,
        selectedRegion: '대구',
        selectedCategory: '한식',
      });
    });

    it('run selectRegion action', () => {
      const fetchRestaurants = jest.fn();
      loadRestaurants.mockImplementation(() => fetchRestaurants);

      const { getByRole } = renderRegionsContainer();

      fireEvent.click(getByRole('button', { name: '서울' }));
      expect(dispatch).toBeCalledWith(selectRegion('서울'));
      expect(dispatch).toBeCalledWith(loadRestaurants());
    });
  });
});
