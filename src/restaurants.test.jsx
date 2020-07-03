import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('레스토랑 목록이 표시된다.', () => {
    const restaurants = [
      {
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
      },
    ];

    const { getByText } = render((
      <Restaurants restaurants={restaurants} />
    ));

    expect(getByText('양천주가')).toBeInTheDocument();
  });
});
