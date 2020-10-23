import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants Component', () => {
  it('Page render', () => {
    const { getByText } = render((
      <Restaurants />
    ));

    expect(getByText(/홍콩반점/)).not.toBeNull();
  });
});
