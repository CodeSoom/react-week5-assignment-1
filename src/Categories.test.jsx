import { fireEvent, render } from '@testing-library/react';

import categories from '../fixtures/categories';

import Categories from './Categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  const renderCategories = () => render((
    <Categories
      categories={categories}
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
    const category = categories[2];

    const { getByRole } = renderCategories();

    fireEvent.click(getByRole('button', { name: category.name }));

    expect(handleClick).toHaveBeenCalledWith(category);
  });
});
