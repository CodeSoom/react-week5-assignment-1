import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

jest.mock('react-redux');

describe('RestaurantCategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  it('render', () => {
    const { getByText } = render((
      <RestaurantCategoriesContainer />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
});
