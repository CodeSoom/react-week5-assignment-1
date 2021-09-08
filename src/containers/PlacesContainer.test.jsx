import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import PlacesContainer from './PlacesContainer';

import places from '../../fixtures/places';

jest.mock('react-redux');

test('PlacesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    places,
  }));

  const { getByText } = render((
    <PlacesContainer />
  ));

  expect(getByText(/서울/)).not.toBeNull();
});
