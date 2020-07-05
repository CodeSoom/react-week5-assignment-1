import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../fixtures/restaurants';

describe('RestaurantsContainer', () => {
  it('분류 목록을 받아서 화면에 보여준다.', () => {
    const { getByText } = render((
      <RestaurantsContainer />
    ));

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
