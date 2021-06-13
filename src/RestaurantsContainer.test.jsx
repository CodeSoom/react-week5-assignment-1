import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      {
        id: 6,
        categoryId: 1,
        name: '한국식 초밥',
        address: '서울 강남구',
        information: '한국식 초밥 in 서울 강남구',
      },
    ],
  }));

  it('render', () => {
    const { getByText } = render((
      <RestaurantsContainer />
    ));

    expect(getByText('한국식 초밥')).not.toBeNull();
  });
});
