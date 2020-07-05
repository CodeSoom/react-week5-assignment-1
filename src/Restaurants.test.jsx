import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import { restaurants } from '../fixtures/restaurants';

describe('Restaurants', () => {
  it('분류 목록을 받아서 화면에 보여준다.', () => {
    const { getByText } = render((
      <Restaurants restaurants={restaurants} />
    ));

    restaurants.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
