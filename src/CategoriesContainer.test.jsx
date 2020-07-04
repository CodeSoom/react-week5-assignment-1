import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { selectCategory } from './action';

import { categories } from '../__fixture__/data';

jest.mock('react-redux');

const initState = {
  categories,
  selectedCategory: '',
};

function mockUseSelector(state = initState) {
  useSelector.mockImplementation((selector) => selector({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
  }));
}

function renderCategoriesContainer() {
  return render(<CategoriesContainer />);
}

describe('<CategoriesContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  describe('render CategoriesContainer', () => {
    context('without selectedCategory', () => {
      beforeEach(() => {
        mockUseSelector();
      });

      it('shows categories', () => {
        const { queryByRole } = renderCategoriesContainer();

        categories.forEach((category) => {
          expect(queryByRole('button', { name: category.name })).not.toBeNull();
        });
      });
    });
    context('with selectedCategory', () => {
      beforeEach(() => {
        mockUseSelector({
          ...initState,
          selectedCategory: '한식',
        });
      });

      it('shows a category with a selection mark', () => {
        const { queryByRole } = renderCategoriesContainer();

        expect(queryByRole('button', { name: '한식(V)' })).not.toBeNull();
      });
    });
  });

  context('when the user selects category', () => {
    beforeEach(() => {
      mockUseSelector();
    });

    it('run selectCategory action', () => {
      const { getByRole } = renderCategoriesContainer();

      categories.forEach((category) => {
        fireEvent.click(getByRole('button', { name: category.name }));
        expect(dispatch).toBeCalledWith(selectCategory(category.name));
      });
    });
  });
});
