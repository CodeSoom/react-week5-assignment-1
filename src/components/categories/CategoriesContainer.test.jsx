import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../../../fixtures/categories';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const selectedCategoryId = categories[0].id;
  const selectedCategory = categories[0].name;
  const unselectedCategory = categories[1].name;

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    category: {
      categories,
      selectedId: selectedCategoryId,
    },
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders unselected category', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText(unselectedCategory)).not.toBeNull();
  });

  it('renders selected category', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText(unselectedCategory)).not.toBeNull();
  });

  it('calls dispatch when clicked', () => {
    const { queryByText } = render(<CategoriesContainer />);

    fireEvent.click(queryByText(selectedCategory.concat('(V)')));

    expect(dispatch).toBeCalledWith({
      type: 'selectCategory',
      payload: {
        categoryId: selectedCategoryId,
      },
    });
  });

  context('when user clicks unselected category', () => {
    it('calls dispatch 2 times', () => {
      const { queryByText } = render(<CategoriesContainer />);

      fireEvent.click(queryByText(unselectedCategory));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when user clicks already selected category', () => {
    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<CategoriesContainer />);

      fireEvent.click(queryByText(selectedCategory.concat('(V)')));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
