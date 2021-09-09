import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../../fixtures/categories';

import {
  clickCategory,
} from '../modules/actions';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  // Todo 카테코리 버튼 클릭 테스트 구현
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  function renderCategories() {
    return render((
      <CategoriesContainer />
    ));
  }

  it('show categories list', () => {
    const { container } = renderCategories();

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when category button clicked', () => {
    it('initiates clickCategory function', () => {
      const { getByText } = renderCategories();

      categories.forEach(({ id, name }) => {
        fireEvent.click(getByText(name));

        expect(dispatch).toBeCalledWith(clickCategory(id));
      });
    });
  });
});
