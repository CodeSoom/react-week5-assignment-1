import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import restaurant from '../../fixtures/restaurant';

import regions from '../../fixtures/regions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText } = render(<RegionsContainer restaurant={restaurant} />);

  expect(getByText(/서울/)).not.toBeNull();
});
