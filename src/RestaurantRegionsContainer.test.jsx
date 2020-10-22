import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

describe('<RestaurantRegionsContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }],
    selectedRegion: { id: 1, name: '서울' },
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderRestaurantRegionsContainer = () => render((
    <RestaurantRegionsContainer />
  ));

  it('renders region list', () => {
    // When
    const { getByRole } = renderRestaurantRegionsContainer();

    // Then
    expect(getByRole('list')).toHaveTextContent('서울');
  });

  it('renders check mark on selected region', () => {
    // When
    const { getByRole } = renderRestaurantRegionsContainer();

    // Then
    expect(getByRole('button', { name: '서울(V)' })).toBeInTheDocument();
  });

  it('calls dispatch', () => {
    // When
    renderRestaurantRegionsContainer();

    // Then
    expect(dispatch).toBeCalled();
  });

  it('calls dispatch on region button click', () => {
    // Given
    const { getAllByRole } = renderRestaurantRegionsContainer();

    // When
    getAllByRole('button').forEach((button) => {
      fireEvent.click(button);
    });

    // Then
    expect(dispatch).toBeCalledTimes((getAllByRole('button').length) * 2 + 1);
  });
});
