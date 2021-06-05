import React from 'react';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('render', () => {
    const { getByText } = render((
      <RestaurantsContainer />
    ));

    expect(getByText('한국식 초밥')).not.toBeNull();
  });
});
