import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import { restaurants } from '../fixtures';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  given('restaurants', () => restaurants);
  given('message', () => []);

  it('renders restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: given.restaurants,
    }));

    const { queryByText } = render(<RestaurantsContainer />);

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('한국식 초밥')).not.toBeNull();
    expect(queryByText('김초밥')).not.toBeNull();
  });

  it('renders the message that user has to click region and category buttons.', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurants: given.message,
    }));

    const { queryByText } = render(<RestaurantsContainer />);

    expect(queryByText('지역과 카테고리를 클릭해주세요.')).not.toBeNull();
  });
});
