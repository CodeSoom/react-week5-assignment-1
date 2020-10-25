import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../__fixtures__/categories';

import { selectCategory } from './modules/actions';

jest.mock('react-redux');

describe('CategoriesContainer Component', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
    selected: {
      category: '',
    },
  }));

  jest.clearAllMocks();

  it('Page render', () => {
    const { container } = render((
      <CategoriesContainer />
    ));

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('Click buttons', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));

    categories.forEach(({ name }) => {
      fireEvent.click(getByText(name));
      expect(dispatch).toBeCalledWith(selectCategory(name));
    });
  });
});
