import { render, screen } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  context('카테고리 리스트가 있을 때', () => {
    it('다수의 리스트를 렌더한다.', () => {
      const categories = [
        { id: 1, name: '한식' },
        { id: 2, name: '중식' },
      ];

      render(<Categories categories={categories} />);

      expect(screen.getByText('한식')).toBeInTheDocument();
    });
  });

  context('카테고리 리스트가 없을 때', () => {
    it('리스트를 렌더하지 않는다.', () => {
      const categories = [];

      render(<Categories categories={categories} />);

      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });
});
