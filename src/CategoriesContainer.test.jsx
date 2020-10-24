import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../__fixtures__/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('shows a title', () => {
    const { getByText } = render(<CategoriesContainer />);

    expect(getByText('Categories')).not.toBeNull();
  });

  describe('selects a category', () => {
    it('checks selected category', () => {
      const { getByText } = render(<CategoriesContainer />);

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
