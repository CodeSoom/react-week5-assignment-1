import React from 'react';

import { render } from '@testing-library/react';

import CategoryListContainer from './CategoryListContainer';

jest.mock('react-redux');

describe('CategoryListContainer', () => {
  it('레스토랑 카테고리 목록이 로딩된다.', () => {
    const { getByText } = render((
      <CategoryListContainer />
    ));

    expect(getByText('한식')).toBeInTheDocument();
  });
});
