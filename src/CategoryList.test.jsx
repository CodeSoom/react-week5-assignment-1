import React from 'react';

import { render } from '@testing-library/react';

import CategoryList from './CategoryList';

describe('CategoryList', () => {
  it('레스토랑 카테고리 목록이 로딩된다.', () => {
    const categoryList = [];

    const { getByText } = render((
      <CategoryList categoryList={categoryList} />
    ));

    expect(getByText('한식')).toBeInTheDocument();
  });
});
