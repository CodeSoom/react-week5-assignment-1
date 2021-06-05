import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  it('render', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
      ],
    }));

    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    expect(getByText('서울')).not.toBeNull();

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'checkRegion'
    });
  });
});
