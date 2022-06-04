import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixtures/regions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  const restaurant = {
    categoryId: '',
    region: '',
  };

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText } = render(<RegionsContainer restaurant={restaurant} />);

  expect(getByText(/서울/)).not.toBeNull();

  fireEvent.click(getByText(/서울/));

  expect(dispatch).toBeCalledWith({
    type: 'changeRestaurantField',
    payload: {
      name: 'region',
      value: '서울',
    },
  });
});
