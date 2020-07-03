import React from 'react';

import { render } from '@testing-library/react';
import Categories from './Categories';

describe('Categories', () => {
  context('with categories', () => {
    describe('선택된 아이템이 카테고리가 없다.', () => {
      it('한식 리스트가 보인다.', () => {
        const categories = [
          { id: 1, name: '한식' },
        ];
        const handleClickCategory = jest.fn();
        const selected = '';
        const { container } = render(
          <Categories
            categories={categories}
            handleClickCategory={handleClickCategory}
            selected={selected}
          />,
        );
        expect(container).toHaveTextContent('한식');
      });
    });

    describe('선택된 아이템이 카테고리가 있다.', () => {
      it('한식이 선택되었다.', () => {
        const categories = [
          { id: 1, name: '한식' },
        ];
        const handleClickCategory = jest.fn();
        const selected = 1;
        const { container } = render(
          <Categories
            categories={categories}
            handleClickCategory={handleClickCategory}
            selected={selected}
          />,
        );
        expect(container).toHaveTextContent('한식(V)');
      });
    });
  });

  context('without categories', () => {
    describe('카테고리 요청하기전.', () => {
      it('카테고리가 없습니다.', () => {
        const categories = [];
        const { container } = render(<Categories categories={categories} />);
        expect(container).toHaveTextContent('카테고리가 없습니다.');
      });
    });
  });
});
