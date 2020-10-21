import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixtures/regions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({ regions }));

  const { queryByText } = render(<RegionsContainer />);

  expect(queryByText(/서울/)).not.toBeNull();

  expect(queryByText(/부산\(V\)/)).not.toBeNull();
});
