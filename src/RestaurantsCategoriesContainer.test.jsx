import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsCategoriesContainer from './RestaurantsCategoriesContainer';

describe('<RestaurantsCategoriesContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: [{ id: 1, name: '한식' }],
  }));

  const renderRestaurantsCategoriesContainer = () => render((
    <RestaurantsCategoriesContainer />
  ));

  it('renders categories list', () => {
    // When
    const { getByRole } = renderRestaurantsCategoriesContainer();

    // Then
    expect(getByRole('list')).toHaveTextContent('한식');
  });

  it('calls dispach', () => {
    // When
    renderRestaurantsCategoriesContainer();

    // Then
    expect(dispatch).toBeCalled();
  });
});
