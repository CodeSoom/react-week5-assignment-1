import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('레스토랑 목록이 표시된다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [{
        id: 1,
        categoryId: 1,
        name: '양천주가',
        address: '서울 강남구',
      }],
    }));

    const { getByText } = render((
      <RestaurantsContainer />
    ));

    expect(getByText('양천주가')).toBeInTheDocument();
  });
});
