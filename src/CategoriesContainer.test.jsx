import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../__fixtures__/categories';

import CategoriesContainer from './CategoriesContainer';

import { selectedCategory } from './actions';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const renderCategoriesContainer = () => render(
    <CategoriesContainer />,
  );

  it('renders categories', () => {
    const { container } = renderCategoriesContainer();

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when categories button is clicked', () => {
    it('dispatches selectedCategory', () => {
      const { getByText } = renderCategoriesContainer();

      categories.forEach(({ id, name }) => {
        fireEvent.click(getByText(name));

        expect(dispatch).toBeCalledWith(selectedCategory(id));
      });
    });
  });
});
