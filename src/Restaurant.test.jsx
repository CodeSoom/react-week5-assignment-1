import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  it('renders restaurant', () => {
    const { getByText } = render((
      <Restaurant
        name="홍콩반점"
      />
    ));

    expect(getByText('홍콩반점')).not.toBeNull();
  });
});
