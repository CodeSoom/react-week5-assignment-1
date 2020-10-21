import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { selectRegion } from './actions';

import RestaurantRegionContainer from './RestaurantRegionContainer';

jest.mock('react-redux');

describe('RestaurantRegionContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
    ],
  }));

  it('shows a title', () => {
    const { getByText } = render(<RestaurantRegionContainer />);

    expect(getByText('Restaurant Regions')).not.toBeNull();
  });

  describe('selects a region', () => {
    it('checks selected region', () => {
      const { getByText } = render(<RestaurantRegionContainer />);

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledWith(selectRegion(1));
    });
  });
});
