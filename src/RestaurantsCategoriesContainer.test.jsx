import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantsCategoriesContainer from './RestaurantsCategoriesContainer';

describe('<RestaurantsCategoriesContainer />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [{ id: 1, name: '한식' }],
      selectedCategory: { id: 1, name: '한식' },
    }));
  });

  const renderRestaurantsCategoriesContainer = () => render((
    <RestaurantsCategoriesContainer />
  ));

  it('renders categories list', () => {
    // When
    const { getByRole } = renderRestaurantsCategoriesContainer();

    // Then
    expect(getByRole('list')).toHaveTextContent('한식');
  });

  it('renders check mark on selected region', () => {
    // When
    const { getByRole } = renderRestaurantsCategoriesContainer();

    // Then
    expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
  });

  it('calls dispach', () => {
    // When
    renderRestaurantsCategoriesContainer();

    // Then
    expect(dispatch).toBeCalled();
  });

  it('calls dispatch on region button click', () => {
    // Given
    const { getAllByRole } = renderRestaurantsCategoriesContainer();

    // When
    getAllByRole('button').forEach((button) => {
      fireEvent.click(button);
    });

    // Then
    expect(dispatch).toBeCalledTimes((getAllByRole('button').length) * 2 + 1);
  });
});
