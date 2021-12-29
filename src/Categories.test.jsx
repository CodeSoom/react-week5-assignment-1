import { render } from '@testing-library/react';

import Categories from './Categories';
import { categoriesData } from './fixtures';

describe('Categories', () => {
  const renderCategories = (categories) => render(<Categories categories={categories} />);

  context('카테고리 정보가 없으면,', () => {
    it('사용자에게 안내 메시지를 보여준다.', () => {
      const categories = [];
      const { getByText } = renderCategories(categories);

      expect(getByText(/카테고리 정보를 가져오세요./)).toBeInTheDocument();
    });
  });

  context('카테고리 정보가 있으면,', () => {
    it('카테고리를 화면에 보여준다.', () => {
      const { getByText } = renderCategories(categoriesData);

      expect(getByText(categoriesData[0].name)).not.toBeNull();
      expect(getByText(categoriesData[1].name)).not.toBeNull();
      expect(getByText(categoriesData[2].name)).not.toBeNull();
    });
  });
});
