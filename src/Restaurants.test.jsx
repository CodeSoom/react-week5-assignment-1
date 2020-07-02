import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('레스토랑 목록이 보인다.', () => {
    const { getByText } = render(
      <Restaurants />,
    );

    expect(getByText('밀면넘어져요')).not.toBeNull();
  });
});
