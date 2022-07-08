import { render, fireEvent } from '@testing-library/react';

import Category from './Category';

describe('Category', () => {
  const category = { id: 1, name: '한식' };

  const handleClick = jest.fn();

  const renderCategory = ({ selected, onClick } = {}) => render((
    <Category
      category={category}
      selected={selected}
      onClick={onClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the category name', () => {
    const { container } = renderCategory();

    expect(container).toHaveTextContent(category.name);
  });

  it('listens click event', () => {
    const { getByRole } = renderCategory({
      onClick: handleClick,
    });

    fireEvent.click(getByRole('button', { name: category.name }));

    expect(handleClick).toBeCalledWith(category);
  });

  context('with selected', () => {
    it('renders the check mark (V)', () => {
      const { container } = renderCategory({
        selected: true,
      });

      expect(container).toHaveTextContent('(V)');
    });
  });

  context('without selected', () => {
    it("doesn't render the check mark (V)", () => {
      const { container } = renderCategory({
        selected: false,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
