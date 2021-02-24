import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const restaurants = [
    {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      information: '양천주가 in 서울 강남구 123456',
    },
    {
      id: 6,
      categoryId: 1,
      name: '한국식 초밥',
      address: '서울 강남구',
      information: '한국식 초밥 in 서울 강남구',
    },
    {
      id: 14,
      categoryId: 1,
      name: '김초밥',
      address: '서울시 강남구 역삼동',
      information: '김초밥 in 서울시 강남구 역삼동',
    },
  ];

  it('음식점 목록을 보여준다.', () => {
    const { queryByText } = render(<Restaurants restaurants={restaurants} />);

    expect(queryByText('양천주가')).toBeInTheDocument();
    expect(queryByText('김초밥')).toBeInTheDocument();
  });
});
