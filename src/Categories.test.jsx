import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  it('카테고리가 보인다.', () => {
    const { getByText } = render(
      <Categories
        categories={categories}
      />,
    );

    categories.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
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
          selectedCategoryId={selectedId}
          categories={categories}
        />,
      );

      expect(getByText('한식(V)')).not.toBeNull();
    });
  });

  context('without selected id', () => {
    it('(V)가 표시되지 않는다.', () => {
      const selectedId = '';

      const { container } = render(
        <Categories
          selectedCategoryId={selectedId}
          categories={categories}
        />,
      );

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
