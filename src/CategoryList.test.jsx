import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryList from './CategoryList';

import { categoryList } from '../__fixture__/restaurants';

describe('CategoryList', () => {
  it('레스토랑 카테고리 목록이 로딩된다.', () => {
    const { getByText } = render((
      <CategoryList
        categoryList={categoryList}
      />
    ));

    expect(getByText('한식')).toBeInTheDocument();
  });

  it('각각의 카테고리 버튼을 클릭할 수 있다.', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <CategoryList
        categoryList={categoryList}
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText(/한식/));

    expect(handleClick).toBeCalled();
  });
});
