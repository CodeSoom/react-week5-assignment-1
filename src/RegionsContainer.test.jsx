import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from './fixtures/regions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
    checkedRegion: '',
  }));

  const { getByText } = render(<RegionsContainer />);

  regions.forEach((region) => {
    expect(getByText(region.name)).not.toBeNull();
  });
});
