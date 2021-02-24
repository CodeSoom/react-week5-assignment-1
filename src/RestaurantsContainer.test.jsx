import React from 'react';

import { render } from '@testing-library/react';

import RestaurantContainer from './RestaurantContainer';

describe('RestaurantContainer', () => {
  it('renders categories', () => {
    const { queryByText } = render(<RestaurantContainer />);

    expect(queryByText('양천주가')).not.toBeNull();
  });
});
