import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

jest.mock('react-redux');

test('Categories', () => {
  const categories = [
    {
      id: 1,
      name: '한식',
    },
  ];

  const { getByText } = render(<Categories categories={categories} />);

  expect(getByText(/한식/)).not.toBeNull();

  beforeEach(() => {
    jest.clearAllMocks();
  });
});

// Categories 컴포넌트 역할
// Categories 컴포넌트는 컨테이너에서 데이터를 받아
// View단에 렌더링 하기 때문에 데이터를 prop으로 받는 걸 테스트 한다.
