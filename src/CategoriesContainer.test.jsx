import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      {
        id: 1,
        name: '한식',
      }],
  }));

  const { getByText } = render(<CategoriesContainer />);

  expect(getByText(/한식/)).not.toBeNull();
});

// CategoriesContainer 컴포넌트의 역할
// - categories 데이터를 Categories를 컴포넌트에 prop으로 넘겨주기 위해
// useSelector를 사용하여 전역 상태 데이터를 가져온다.
