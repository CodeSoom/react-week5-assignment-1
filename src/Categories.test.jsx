import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  it('renders categories', () => {
    const { getAllByRole } = render((
      <Categories
        categories={categories}
        onClick={handleClick}
        categoryId={null}
      />
    ));

    categories.forEach((category, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(category.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(categories.length);
  });

  it('renders button to listent to click event', () => {
    const { getAllByRole } = render((
      <Categories
        categories={categories}
        onClick={handleClick}
        categoryId={null}
      />
    ));

    const categoriesButtons = getAllByRole('button');

    expect(handleClick).not.toBeCalled();

    categories.forEach((category, index) => {
      fireEvent.click(categoriesButtons[index]);

      expect(handleClick).toBeCalledWith({
        field: 'categoryId',
        content: category.id,
      });
    });
  });

  categories.forEach((category, index) => {
    it("renders 'V' button with equal category id", () => {
      const { getAllByRole } = render((
        <Categories
          categories={categories}
          onClick={handleClick}
          categoryId={category.id}
        />
      ));

      expect(getAllByRole('button')[index].textContent).toContain('V');
    });
  });
});
