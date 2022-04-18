import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LocationsContainer from './LocationsContainer';

import locations from '../fixtures/locations';

jest.mock('react-redux');

test('LocationsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    locations,
  }));

  const { queryByText } = render((
    <LocationsContainer />
  ));

  expect(queryByText('서울')).not.toBeNull();
});
