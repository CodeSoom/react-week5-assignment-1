import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('지역 리스트가 나타난다.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));

    const { getByText } = render(<RestaurantsContainer />);

    expect(getByText('양천주가')).not.toBeNull();
    expect(getByText('한국식 초밥')).not.toBeNull();
  });
});
