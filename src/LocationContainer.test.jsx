import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LocationContainer from './LocationContainer';

import locations from '../fixtures/locations';

jest.mock('react-redux');

describe('LocationContainer', () => {
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
    const handleClick = jest.fn();
    const { getByText } = render((
      <LocationContainer />
    ));

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
