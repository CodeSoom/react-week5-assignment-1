import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  function renderRegions({ categories }) {
    return render((
      <Categories categories={categories} />
    ));
  }

  context('카테고리 목록이 있을 때', () => {
    it('카테고리 목록이 생성되면', () => {
      const categories = [
        { id: 1, name: '한식' },
        { id: 5, name: '분식' },
      ];

      const { queryByText } = renderRegions({ categories });

      expect(queryByText(/한식/)).not.toBeNull();
      expect(queryByText(/분식/)).not.toBeNull();
    });
  });

  context('카테고리 목록이 없을 때', () => {
    it('카테고리 목록이 생성되지 않으면', () => {
      const categories = [];

      const { queryByText } = renderRegions({ categories });

      expect(queryByText(/카테고리가 없습니다/)).not.toBeNull();
    });
  });
});
