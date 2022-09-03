import { render, fireEvent } from '@testing-library/react';
import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: given.categories,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders categories', () => {
    given('categories', () => categories);

    const { getAllByRole } = render((
      <CategoriesContainer />
    ));

    categories.forEach((category, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(category.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(categories.length);
  });

  it('renders button to listent to click event', () => {
    given('categories', () => categories);

    const { getAllByRole } = render((
      <CategoriesContainer />
    ));

    const categoriesButtons = getAllByRole('button');

    expect(dispatch).not.toBeCalled();

    categoriesButtons.forEach((categoryButton) => {
      fireEvent.click(categoryButton);

      expect(dispatch).toBeCalledWith({
        type: 'applyCategory',
        payload: {
          region: categoryButton.textContent,
        },
      });
    });
  });
});
