import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));
  const { getByText } = render((
    <RegionsContainer />
  ));

  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대전')).not.toBeNull();
});
