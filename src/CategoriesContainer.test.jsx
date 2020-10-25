import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../__fixtures__/categories';

import CategoriesContainer from './CategoriesContainer';

import { selectCategory } from './actions';

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

  it('renders Categories with categories', () => {
    const { container } = renderCategoriesContainer();

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  context('when click each category button', () => {
    it('dispatches selectCategory action', () => {
      const { getByText } = renderCategoriesContainer();

      categories.forEach(({ id, name }) => {
        fireEvent.click(getByText(name));

        expect(dispatch).toBeCalledWith(selectCategory(id));
      });
    });
  });
});
