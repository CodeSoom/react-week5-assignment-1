import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LocationContainer from './LocationContainer';

import locations from '../fixtures/locations';

import { setLocation } from './action';

jest.mock('react-redux');

describe('LocationContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    locations,
    location: '대전',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders location list', () => {
    const { container } = render((
      <LocationContainer />
    ));

    expect(container).toHaveTextContent(locations[0].name);
  });

  it('changes state by clicking the location button', () => {
    const { getByText } = render((
      <LocationContainer />
    ));

    fireEvent.click(getByText('서울'));

    expect(dispatch).toBeCalledWith(setLocation('서울'));
  });

  it('renders "(V)" when has location in state ', () => {
    const { container } = render((
      <LocationContainer />
    ));

    expect(container).toHaveTextContent('(V)');
  });
});
