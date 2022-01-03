import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';
import { categoriesData } from './fixtures';

describe('Categories', () => {
  const handleClick = jest.fn();

  const renderCategories = ({
    categories,
    activeId,
    onClick,
  }) => render(
    <Categories
      categories={categories}
      activeId={activeId}
      onClick={onClick}
    />,
  );

  context('카테고리 정보가 없으면,', () => {
    it('사용자에게 안내 메시지를 보여준다.', () => {
      const categories = [];
      const { getByText } = renderCategories({ categories });

      expect(getByText(/카테고리 정보를 가져오세요./)).toBeInTheDocument();
    });
  });

  context('카테고리 정보가 있으면,', () => {
    it('카테고리를 화면에 보여준다.', () => {
      const { getByText } = renderCategories({ categories: categoriesData });

      expect(getByText(categoriesData[0].name)).not.toBeNull();
      expect(getByText(categoriesData[1].name)).not.toBeNull();
      expect(getByText(categoriesData[2].name)).not.toBeNull();
    });

    it('카테고리를 클릭하면, onClick 핸들러가 실행된다.', () => {
      const { getByText } = renderCategories({ categories: categoriesData, onClick: handleClick });

      fireEvent.click(getByText(categoriesData[0].name));
      expect(handleClick).toBeCalled();
    });

    it('특정 카테고리 id와 activeId가 일치하면, 카테고리 정보 옆에 (V) 텍스트가 표시된다.', () => {
      const { getByText } = renderCategories({ categories: categoriesData, activeId: 2 });

      const regex = new RegExp(`${categoriesData[1].name}`);

      expect(getByText(regex)).toHaveTextContent(/\(V\)/);
    });
  });
});
