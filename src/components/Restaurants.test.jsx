import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';

describe('Restaurants', () => {
  it('식당 목록을 표시합니다.', () => {
    const { queryByText } = render((<Restaurants restaurants={restaurants} />));

    expect(queryByText(/호신각/)).not.toBeNull();
    expect(queryByText(/홍콩반점/)).not.toBeNull();
  });
});
