import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixture__/data';

import { selectRegion } from './action';

jest.mock('react-redux');

const initState = {
  regions,
  selectedRegion: '',
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

function renderRegionsContainer() {
  return render(<RegionsContainer />);
}

describe('<RegionsContainer />', () => {
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  describe('render RegionsContainer', () => {
    context('without selectedRegion', () => {
      it('shows regions', () => {
        mockUseSelector();

        const { queryByRole } = renderRegionsContainer();

        regions.forEach((region) => {
          expect(queryByRole('button', { name: region.name })).not.toBeNull();
        });
      });
    });

    context('with selectedRegion', () => {
      it('shows a region with a selection mark', () => {
        mockUseSelector({
          ...initState,
          selectedRegion: '서울',
        });

        const { queryByRole } = renderRegionsContainer();

        expect(queryByRole('button', { name: '서울(V)' })).not.toBeNull();
      });
    });
  });

  context('when the user selects region', () => {
    it('run selectRegion action', () => {
      mockUseSelector();

      const { getByRole } = renderRegionsContainer();

      regions.forEach((region) => {
        fireEvent.click(getByRole('button', { name: region.name }));
        expect(dispatch).toBeCalledWith(selectRegion(region.name));
      });
    });
  });
});
