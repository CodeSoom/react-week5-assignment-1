import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('레스토랑 목록이 표시된다.', () => {
    const { getByText } = render((
      <RestaurantsContainer />
    ));

    expect(getByText('양천주가')).toBeInTheDocument();
  });
});
