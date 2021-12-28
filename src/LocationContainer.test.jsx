import { render } from '@testing-library/react';

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
});
