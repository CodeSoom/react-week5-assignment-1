import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

const categories = [
  { id: 1, name: '한식' },
];
useSelector.mockImplementation((selector) => selector({ categories }));

describe('CategoriesContainer', () => {
  it('contains category names', () => {
    const { queryByText } = render(
      <CategoriesContainer />,
    );

    expect(queryByText(/한식/)).not.toBeNull();
  });

  it('selects a category and update display', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render(
      <CategoriesContainer />,
    );

    fireEvent.click(getByText(/한식/));

    expect(dispatch).toBeCalledWith({
      type: 'selectCategory',
      payload: { categoryId: 1 },
    });
  });
});
