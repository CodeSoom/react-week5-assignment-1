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
      filter: given.filter,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders categories', () => {
    given('categories', () => categories);
    given('filter', () => ({ categoryId: null }));

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
    given('filter', () => ({ categoryId: null }));

    const { getAllByRole } = render((
      <CategoriesContainer onClick={handleClick} />
    ));

    const categoriesButtons = getAllByRole('button');

    categories.forEach((category, index) => {
      fireEvent.click(categoriesButtons[index]);

      expect(handleClick).toBeCalledWith({
        field: 'categoryId',
        content: category.id,
      });
    });
  });

  categories.forEach((category, index) => {
    it("renders 'V' button with equal filter", () => {
      given('categories', () => categories);
      given('filter', () => ({ categoryId: category.id }));

      const { getAllByRole } = render((
        <CategoriesContainer onClick={handleClick} />
      ));

      expect(getAllByRole('button')[index].textContent).toContain('V');
    });
  });
});
