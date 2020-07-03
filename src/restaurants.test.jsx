import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './restaurants';

describe('Restaurants', () => {
  it('레스토랑 목록이 표시된다.', () => {
    const { getByText } = render((
      <Restaurants />
    ));

    expect(getByText('양천주가')).toBeInTheDocument();
  });
});
