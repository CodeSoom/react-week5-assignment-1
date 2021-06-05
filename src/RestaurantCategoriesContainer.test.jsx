import React from 'react';

import { render } from '@testing-library/react';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

jest.mock('react-redux');

describe('RestaurantCategoriesContainer', () => {
  it('render', () => {
    const { getByText } = render((
      <RestaurantCategoriesContainer />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
});
