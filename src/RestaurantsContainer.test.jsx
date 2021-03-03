import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurants: [{
        id: 1,
        name: '영자',
      }],
      selectedRegion: '서울',
      selectedCategory: '한식',
    }));
  });

  it('render restaurants', () => {
    const { container } = render(
      <RestaurantsContainer />,
    );

    expect(container).toHaveTextContent('영자');
  });
});
