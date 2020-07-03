import React from 'react';

import { useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoryListContainer from './CategoryListContainer';

jest.mock('react-redux');

describe('CategoryListContainer', () => {
  it('레스토랑 카테고리 목록이 로딩된다.', () => {
    const { getByText } = render((
      <CategoryListContainer />
    ));

    expect(getByText('한식')).toBeInTheDocument();
  });

  describe('레스토랑 카테고리 목록 중 하나를 클릭하면', () => {
    it('selectCategory 액션이 전달된다.', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { getByText } = render((
        <CategoryListContainer />
      ));

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledWith(selectCategory(1));
    });
  });
});
