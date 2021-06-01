import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

jest.mock('react-redux');

test('Regions', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, region: '서울' },
    ],
  }));

  const { getByText } = render(<Regions />);

  expect(getByText(/서울/)).not.toBeNull();
});
