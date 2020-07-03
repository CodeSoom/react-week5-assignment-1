import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../__fixture__/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('레스토랑 목록이 표시된다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { getByText } = render((
      <RestaurantsContainer />
    ));

    expect(getByText('양천주가')).toBeInTheDocument();
  });
});
