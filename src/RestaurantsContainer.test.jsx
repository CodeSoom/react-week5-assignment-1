import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
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
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector(({
      restaurants,
    })));
  });

  it('분류 목록을 받아서 화면에 보여준다.', () => {
    const { getByText } = render((
      <RestaurantsContainer />
    ));

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
