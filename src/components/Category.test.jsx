import { fireEvent, render } from '@testing-library/react';

import Category from './Category';

import CATEGORIES from '../fixtures/categories';

describe('<Category />', () => {
  const handleClick = jest.fn();

  const renderCategory = ({ category, isSelected = false }) => render((
    <Category
      category={category}
      isSelected={isSelected}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('render category name', () => {
    const category = CATEGORIES[0];

    const { container } = renderCategory({ category });

    expect(container).toHaveTextContent(category.name);
  });

  it('listen click event', () => {
    const category = CATEGORIES[0];

    const { getByRole } = renderCategory({ category });

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByRole('button'));

    expect(handleClick).toBeCalledWith(category.id);
  });

  context('category is selected', () => {
    it('renders "(V)" next to category name', () => {
      const category = CATEGORIES[0];

      const { container } = renderCategory({
        category,
        isSelected: true,
      });

      expect(container).toHaveTextContent(`${category.name}(V)`);
    });
  });

  context('category is not selected', () => {
    it('doesnt render "(V)"', () => {
      const { container } = renderCategory({
        category: CATEGORIES[0],
        isSelected: false,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
