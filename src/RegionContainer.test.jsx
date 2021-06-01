import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

test('RegionContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText, getAllByRole } = render(<RegionContainer />);

  expect(getAllByRole('listitem')).not.toBeNull();
  expect(getByText(regions[1].name)).not.toBeNull();
});
