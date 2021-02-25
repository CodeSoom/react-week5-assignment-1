import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: [{ id: 1, name: '한식' }],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders categories', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText('한식')).not.toBeNull();
  });

  it('listens category button click event', () => {
    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'selectCategory',
      payload: {
        id: 1,
      },
    });
  });
});
