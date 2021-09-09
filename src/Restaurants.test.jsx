import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const restaurants = [
    {
      id: 9,
      categoryId: 2,
      name: '호신각',
      address: '서울 강남구',
      information: '호신각 in 서울 강남구',
    },
    {
      id: 10,
      categoryId: 2,
      name: '홍콩반점',
      address: '서울시 서대문구',
      information: '홍콩반점 in 서울시 서대문구',
    },
    {
      id: 11,
      categoryId: 2,
      name: '몰라몰라',
      address: '서울이다',
      information: '몰라몰라 in 서울이다',
    },
  ];

  function renderRestaurants() {
    return (
      render(<Restaurants restaurants={restaurants} />)
    );
  }

  it('레스토랑 목록을 보여준다', () => {
    const { getByText } = renderRestaurants();

    expect(getByText('호신각')).toBeInTheDocument();
    expect(getByText('홍콩반점')).toBeInTheDocument();
    expect(getByText('몰라몰라')).toBeInTheDocument();
  });
});
