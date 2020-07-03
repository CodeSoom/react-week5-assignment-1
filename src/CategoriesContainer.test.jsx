import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selected: {
      categoryId: 1,
    },
  }));

  context('with categories', () => {
    it('카테고리 항목들이 보인다.', () => {
      const { getByText } = render(
        <CategoriesContainer />,
      );

      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/중식/)).not.toBeNull();
      expect(getByText(/일식/)).not.toBeNull();
      expect(getByText(/양식/)).not.toBeNull();
      expect(getByText(/분식/)).not.toBeNull();
    });
  });

  context('when click category', () => {
    it('dispatch가 실행된다.', () => {
      const { getByText } = render(
        <CategoriesContainer />,
      );

      fireEvent.click(getByText(/한식/));

      expect(dispatch).toBeCalled();
    });

    it('선택된 categoryId에 (V)가 표시된다.', () => {
      const { getByText } = render(
        <CategoriesContainer />,
      );

      expect(getByText(/(V)/)).not.toBeNull();
    });
  });
});
