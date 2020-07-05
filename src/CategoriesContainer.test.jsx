import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { categories, selectedCategory } from '../fixtures/categories';

import { selectCategory } from './actions';

describe('CategoriesContainer', () => {
  it('handleClick 테스트', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      categories,
      selectedCategory,
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <CategoriesContainer />
    ));

    fireEvent.click(getByText(/한식/));

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toBeCalledWith(selectCategory(1));
  });
});
