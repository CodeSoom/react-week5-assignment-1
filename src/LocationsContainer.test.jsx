import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LocationsContainer from './LocationsContainer';

jest.mock('react-redux');

test('LocationsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    locations: [
      {
        id: 1, name: '서울',
      },
    ],
  }));

  const { queryByText } = render((
    <LocationsContainer />
  ));

  expect(queryByText('서울')).not.toBeNull();
});
