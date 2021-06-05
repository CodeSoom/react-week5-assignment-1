import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

jest.mock('react-redux');

describe('RestaurantCategoriesContainer', () => {
  it('render', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    const { getByText } = render((
      <RestaurantCategoriesContainer />
    ));

    expect(getByText('한식')).not.toBeNull();

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'checkCategory',
      payload: {
        id: 1,
      },
    });
  });
});
