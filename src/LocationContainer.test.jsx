import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LocationContainer from './LocationContainer';

import locations from '../fixtures/locations';

jest.mock('react-redux');

describe('LocationContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    locations,
  }));

  it('renders location list', () => {
    const { getByText } = render((
      <LocationContainer />
    ));

    expect(getByText('서울')).not.toBeNull();
  });

  it('changes state by clicking the location button', () => {
    const { getByText } = render((
      <LocationContainer />
    ));

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'setLocation',
      payload: {
        location: '서울',
      },
    });
  });
});
