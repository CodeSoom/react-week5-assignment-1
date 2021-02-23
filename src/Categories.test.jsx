import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const onClick = jest.fn();

  it('분류를 출력합니다.', () => {
    const { queryByText } = render((<Categories categories={categories} />));

    categories.forEach((categorie) => {
      expect(queryByText(categorie.name)).not.toBeNull();
    });
  });

  it('onClick함수가 실행합니다.', () => {
    const { getByText } = render((
      <Categories
        categories={categories}
        onClick={onClick}
      />
    ));

    expect(onClick).not.toBeCalled();

    fireEvent.click(getByText(/한식/));

    expect(onClick).toBeCalled();
  });
});
