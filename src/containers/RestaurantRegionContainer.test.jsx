import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedRegionId } from '../actions';

import REGIONS from '../__fixtures__/regions.json';

import RestaurantRegionContainer from './RestaurantRegionContainer';

jest.mock('react-redux');
jest.mock('../services/api');

function renderComponent() {
  return render(<RestaurantRegionContainer />);
}

describe('<RestaurantRegionContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('without regions', () => {
    beforeEach(() => {
      // Given
      useSelector.mockImplementation((selector) => selector({
        regions: [],
      }));
    });

    it('display no region-buttons', () => {
      const { container } = renderComponent();
      const regionButtons = container.querySelector('#button-list').children;
      expect(regionButtons.length).toEqual(0);
    });
  });

  context('with regions', () => {
    beforeEach(() => {
      // Given
      useSelector.mockImplementation((selector) => selector({
        regions: REGIONS,
      }));
    });

    it('display region-buttons', () => {
      const { container } = renderComponent();
      const regionButtons = container.querySelector('#button-list').children;
      expect(regionButtons.length).toEqual(REGIONS.length);
    });

    context('when click region-button', () => {
      it('change selected-region-id', () => {
        const { getAllByRole } = renderComponent();
        // When
        const regionButtons = getAllByRole('button');
        regionButtons.forEach((button, buttonIndex) => {
          fireEvent.click(button);
          // Then
          expect(dispatch).toBeCalledWith(setSelectedRegionId(REGIONS[buttonIndex].id));
        });
      });
    });
  });
});
