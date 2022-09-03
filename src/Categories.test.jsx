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
      />
    ));

    const categoriesButtons = getAllByRole('button');

    expect(handleClick).not.toBeCalled();

    categoriesButtons.forEach((categoryButton) => {
      fireEvent.click(categoryButton);

      expect(handleClick).toBeCalledWith(categoryButton.textContent);
    });
  });
});
