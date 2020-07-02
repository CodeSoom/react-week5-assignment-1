import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  context('with categories', () => {
    it('한식 리스트가 보인다.', () => {
      const categories = [
        { id: 1, name: '한식' },
      ];
      const { container } = render(<Categories categories={categories} />);
      expect(container).toHaveTextContent('한식');
    });
  });

  context('without categories', () => {
    it('카테고리가 없습니다.', () => {
      const categories = [];
      const { container } = render(<Categories categories={categories} />);
      expect(container).toHaveTextContent('카테고리가 없습니다.');
    });
  });
});
