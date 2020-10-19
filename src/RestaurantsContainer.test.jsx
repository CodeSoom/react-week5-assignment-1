import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('<RestaurantsContainer />', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      information: '양천주가 in 서울 강남구 123456',
    }],
  }));

  const renderRestaurantsContainer = () => render((
    <RestaurantsContainer />
  ));

  it('renders restaurants list', () => {
    // When
    const { getByRole } = renderRestaurantsContainer();

    // Then
    expect(getByRole('list')).toHaveTextContent('양천주가');
  });
});
