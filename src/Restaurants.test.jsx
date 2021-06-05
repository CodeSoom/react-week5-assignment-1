import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('render', () => {
    const restaurants = [
      { id: 1, name: '한국식 초밥' },
    ];

    const { getByText } = render((
      <Restaurants restaurant={restaurants} />
    ));

    expect(getByText('한국식 초밥')).not.toBeNull();
  });
});
