import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const onClick = jest.fn();

  function renderCategories() {
    return render((
      <Categories
        categories={categories}
        onClick={onClick}
      />
    ));
  }

  it('분류를 출력합니다.', () => {
    const { queryByText } = renderCategories();

    categories.forEach((categorie) => {
      expect(queryByText(categorie.name)).not.toBeNull();
    });
  });

  it('onClick함수가 실행합니다.', () => {
    const { getByText } = renderCategories();

    expect(onClick).not.toBeCalled();

    fireEvent.click(getByText(/한식/));

    expect(onClick).toBeCalled();
  });
});
