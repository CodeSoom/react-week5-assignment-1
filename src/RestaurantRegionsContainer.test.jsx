import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { regions } from './fixture/initialState';

import { changeRegion } from './actions';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  context('with regions', () => {
    it('renders buttons with regions value', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions,
      }));

      const { getByText } = render(<RestaurantRegionsContainer />);

      expect(getByText('서울')).not.toBeNull();
      expect(getByText('대전')).not.toBeNull();
    });
  });
});

context('when click region value', () => {
  it('change region', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
      region: { id: 2, name: '대전' },
    }));

    const { getByText } = render(<RestaurantRegionsContainer />);

    expect(getByText(/서울/)).not.toBeNull();

    fireEvent.click(getByText(/서울/));

    expect(getByText('대전(V)')).not.toBeNull();

    expect(dispatch).toBeCalledWith(changeRegion({
      id: 1,
      name: '서울',
    }));
  });
});
