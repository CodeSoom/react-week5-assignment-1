import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoryButtonsContainer from './CategoryButtonsContainer';

import categories from './__fixture__/categories';

describe('CategoryButtonsContainer', () => {
  jest.mock('react-redux');

  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      currentCategoryId: '',
      categories,
    }));
  });

  it('renders restaurant category buttons', () => {
    const { getByText } = render(<CategoryButtonsContainer />);

    expect(getByText('한식')).not.toBeNull();
  });

  it('renders "V" mark to the clicked button', () => {
    const { getByText } = render(<CategoryButtonsContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'setCategory',
      payload: {
        currentCategoryId: 1,
      },
    });
  });
});
