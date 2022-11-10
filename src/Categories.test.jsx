import { render, screen, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories as categoryList } from '../fixtures/data';

jest.mock('react-redux');

describe('Categories', () => {
  const handleClick = jest.fn();

  const renderCategories = ({ categories = [], selectedCategoryId = null }) => render((
    <Categories
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onClick={handleClick}
    />
  ));

  context('카테고리 데이터가 없을 시', () => {
    it('"카테고리가 없어요!" 문구가 랜더링된다', () => {
      const { container } = renderCategories({
        categories: [],
      });

      expect(container).toHaveTextContent('카테고리가 없어요!');
    });
  });

  context('카테고리 데이터가 있을 시', () => {
    it('카테고리 목록이 나타난다', () => {
      renderCategories({ categories: categoryList });

      expect(screen.getByText('분식')).not.toBeNull();
    });

    it('카테고리를 선택하면 handleClick이 호출된다', () => {
      const category = categoryList[0];
      renderCategories({ categories: categoryList });

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByText(category.name));

      expect(handleClick).toBeCalledWith(category.id);
    });
  });

  context('카테고리 아이디가 있을 시', () => {
    it('"V"와 함께 선택된 카테고리가 랜더링된다', () => {
      renderCategories({
        categories: categoryList[0],
        selectedCategoryId: categoryList[0].id,
      });

      expect(screen.queryByText(`${categoryList[0].name}(V)`)).toBeNull();
    });
  });

  context('카테고리 아이디가 없을 시', () => {
    it('"V"가 랜더링되지 않는다', () => {
      const category = categoryList[0];
      const { container } = renderCategories({
        categories: category,
        selectedCategoryId: null,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
