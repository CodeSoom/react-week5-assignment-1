import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LocationsContainer from './LocationsContainer';

import locations from '../fixtures/locations';

jest.mock('react-redux');

describe('LocationsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    locations,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders regions', () => {
    const { queryByText } = render((
      <LocationsContainer />
    ));

    expect(queryByText('서울')).not.toBeNull();
  });

  it('calls dispatch', () => {
    const { getByText } = render((
      <LocationsContainer />
    ));

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'selectLocation',
      payload: {
        id: 1,
      },
    });
  });
});
