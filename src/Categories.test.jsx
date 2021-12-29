import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  context('카테고리 정보가 없으면,', () => {
    const categories = [];
    const renderCategories = () => render(<Categories categories={categories} />);

    it('사용자에게 안내 메시지를 보여준다.', () => {
      const { getByText } = renderCategories();

      expect(getByText(/카테고리 정보를 가져오세요./)).toBeInTheDocument();
    });
  });

  context('카테고리 정보가 있으면,', () => {

  });
});
