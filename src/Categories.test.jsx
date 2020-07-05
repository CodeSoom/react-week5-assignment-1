import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories, selectedCategory } from '../fixtures/categories';

describe('Categories', () => {
  describe('상위 컴포넌트에서 받은 props 테스트', () => {
    const onClick = jest.fn();

    test('value를 버튼 이름으로 출력', () => {
      const { getByText } = render((
        <Categories
          categories={categories}
          onClick={onClick}
        />
      ));

      expect(getByText(/한식/)).not.toBeNull();
    });

    test('버튼 동작 테스트', () => {
      const { getByText } = render((
        <Categories
          categories={categories}
          onClick={onClick}
        />
      ));

      expect(onClick).not.toBeCalled();

      fireEvent.click(getByText(/한식/));

      expect(onClick).toBeCalledWith(1);
    });

    test('selectedCategory 테스트', () => {
      const { container } = render((
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onClick={onClick}
        />
      ));

      expect(container).toHaveTextContent('한식(V)');
    });
  });
});
