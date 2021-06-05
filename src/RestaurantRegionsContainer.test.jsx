import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  it('render', () => {
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    expect(getByText('서울')).not.toBeNull();

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalled();
  });
});
