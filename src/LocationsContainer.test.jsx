import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LocationsContainer from './LocationsContainer';

import locations from '../fixtures/locations';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

test('LocationsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    locations,
  }));

  const { queryByText, getByText } = render((
    <LocationsContainer />
  ));

  expect(queryByText('서울')).not.toBeNull();

  fireEvent.click(getByText('서울'));

  expect(dispatch).toBeCalledWith({
    type: 'selectLocation',
    payload: {
      name: '서울',
    },
  });
});
