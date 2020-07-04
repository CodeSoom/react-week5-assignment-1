import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('should display restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        { id: 101, name: '중식' },
      ],
    }));

    const { getByText } = render((
      <RestaurantsContainer />
    ));

    expect(getByText('원초밥')).not.toBeNull();
  });
});
