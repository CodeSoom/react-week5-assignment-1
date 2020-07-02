import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
  ];

  const handleClick = jest.fn();

  it('카테고리가 보인다.', () => {
    const { getByText } = render(
      <Categories
        categories={categories}
      />,
    );

    categories.forEach((category) => {
      expect(getByText(category.name)).not.toBeNull();
    });
  });

  it('버튼을 클릭하면 handleClick이 호출된다.', () => {
    const { getByText } = render(
      <Categories
        categories={categories}
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });

  context('with selected id', () => {
    it('선택된 카테고리에 (V)가 표시된다.', () => {
      const selectedId = 1;

      const { getByText } = render(
        <Categories
          selected={selectedId}
          categories={categories}
        />,
      );

      expect(getByText('한식(V)')).not.toBeNull();
    });
  });
});
