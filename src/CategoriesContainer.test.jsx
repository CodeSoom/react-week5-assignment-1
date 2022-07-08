import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import categories from '../fixtures/categories';

import { selectCategory } from './actions';
import { loadCategories } from './async-actions';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');
jest.mock('./async-actions');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    categories,
  }));

  const renderCategoriesContainer = () => render(<CategoriesContainer />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders fetched categories', () => {
    const { container } = renderCategoriesContainer();

    expect(dispatch).toHaveBeenCalledWith(loadCategories());
    categories
      .map((category) => category.name)
      .forEach(
        (categoryName) => expect(container).toHaveTextContent(categoryName),
      );
  });

  it('dispatches a selectCategory action when category is clicked', () => {
    const category = categories[2];

    const { getByRole } = renderCategoriesContainer();

    fireEvent.click(getByRole('button', { name: category.name }));

    expect(dispatch).toHaveBeenCalledWith(selectCategory(category));
  });
});
