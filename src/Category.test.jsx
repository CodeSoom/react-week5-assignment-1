import { fireEvent, render, screen } from '@testing-library/react';

import Category from './Category';

import { categories } from '../fixtures/data';

jest.mock('react-redux');

describe('Category', () => {
  const handleClick = jest.fn();

  const renderCategory = ({ category, isSelected = false }) => render((
    <Category
      category={category}
      isSelected={isSelected}
      onClick={handleClick}
    />
  ));

  it('카테고리 목록이 랜더링된다', () => {
    const category = categories[0];

    const { container } = renderCategory({ category });

    expect(container).toHaveTextContent(category.name);
  });

  it('카테고리를 선택하면 handleClick이 호출한다', () => {
    const category = categories[0];

    renderCategory({ category });

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toBeCalledWith(category.id);
  });

  context('카테고리를 선택하면', () => {
    it('선택한 카테고리에 "V"가 랜더링된다', () => {
      const category = categories[0];

      const { container } = renderCategory({ category, isSelected: true });

      expect(container).toHaveTextContent(`${category.name}(V)`);
    });
  });

  context('카테고리를 선택하지 않은 목록에는', () => {
    it('"V"가 랜더링되지 않는다', () => {
      const category = categories[0];

      const { container } = renderCategory({ category, isSelected: false });

      expect(container).toHaveTextContent(`${category.name}`);
      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
