import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../../fixtures/categories';

import CategoriesContainer from './CategoriesContainer';

import {
  selectCategory,
} from '../modules/actions';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories,
    }));
  });

  function renderCategoriesContainer() {
    return render((
      <CategoriesContainer />
    ));
  }

  it('shows category list', () => {
    const { container } = renderCategoriesContainer();

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when category button clicked', () => {
    it('changes category', () => {
      const { getByText } = renderCategoriesContainer();

      categories.forEach(({ id, name }) => {
        fireEvent.click(getByText(name));

        expect(dispatch).toBeCalledWith(selectCategory(id));
      });
    });
  });
});
