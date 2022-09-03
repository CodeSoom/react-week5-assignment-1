import { render, fireEvent } from '@testing-library/react';
import given from 'given2';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: given.categories,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders categories', () => {
    given('categories', () => categories);

    const { getAllByRole } = render((
      <CategoriesContainer onClick={handleClick} />
    ));

    categories.forEach((category, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(category.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(categories.length);
  });

  it('renders button to listent to click event', () => {
    given('categories', () => categories);

    const { getAllByRole } = render((
      <CategoriesContainer onClick={handleClick} />
    ));

    const categoriesButtons = getAllByRole('button');

    categoriesButtons.forEach((categoryButton) => {
      fireEvent.click(categoryButton);

      expect(handleClick).toBeCalledWith({
        field: 'category',
        content: categoryButton.textContent,
      });
    });
  });
});
