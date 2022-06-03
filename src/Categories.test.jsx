import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

import { CATEGORIES } from './fixture';

const updateSelectedCategory = jest.fn();

describe('Categories', () => {
  const renderComponent = (categories, selectedCategory) => render(
    <Categories
      categories={categories}
      updateSelectedCategory={updateSelectedCategory}
      selectedCategory={selectedCategory}
    />,
  );

  it('render', () => {
    const { container } = renderComponent(CATEGORIES, '');

    expect(container).toHaveTextContent('한식');
  });

  context('카테고리가 있을 때', () => {
    it('카테고리를 클릭하면 updateSelectedCategory가 호출된다', () => {
      const { getByRole } = renderComponent(CATEGORIES, '');

      const button = getByRole('button', { name: '한식' });
      fireEvent.click(button);
      expect(updateSelectedCategory).toBeCalled();
    });

    it('선택된 카테고리에는 V표시가 붙는다', () => {
      const { container } = renderComponent(CATEGORIES, '한식');

      expect(container).toHaveTextContent('한식(V)');
    });
  });

  context('카테고리가 없을때', () => {
    it('카테고리가 존재하지 않다는 문구가 출력된다', () => {
      const { container } = renderComponent([]);

      expect(container).toHaveTextContent('카테고리가 존재하지 않습니다');
    });
  });
});
