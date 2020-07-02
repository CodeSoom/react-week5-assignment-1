import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantRegionsContainer from './RestaurantRegionsContainer';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  context('with regions', () => {
    it('renders buttons with regions value', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions: [
          {
            id: 1,
            name: '서울',
          },
          {
            id: 2,
            name: '대전',
          },
        ],
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
      regions: [
        {
          id: 1,
          name: '서울',
        },
        {
          id: 2,
          name: '대전',
        },
      ],
    }));

    const { getByText } = render(<RestaurantRegionsContainer />);

    expect(getByText('서울')).not.toBeNull();

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'changeRegion',
      payload: {
        name: '서울',
      },
    });
  });
});
