import { fireEvent, render } from '@testing-library/react';

import categories from '../fixtures/categories';

import Categories from './Categories';

describe('Categories', () => {
  const initialCategory = categories[2];

  const handleClick = jest.fn();

  const renderCategories = ({ selectedCategory } = {}) => render((
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders categories', () => {
    const { container } = renderCategories();

    categories
      .map((category) => category.name)
      .forEach(
        (categoryName) => expect(container).toHaveTextContent(categoryName),
      );
  });

  it('listens click event', () => {
    const { getByRole } = renderCategories();

    fireEvent.click(getByRole('button', { name: initialCategory.name }));

    expect(handleClick).toHaveBeenCalledWith(initialCategory);
  });

  it('renders check mark (V) with the selected category', () => {
    const { getByRole } = renderCategories({ selectedCategory: initialCategory });

    expect(getByRole('button', { name: `${initialCategory.name}(V)` })).toBeInTheDocument();
  });
});
