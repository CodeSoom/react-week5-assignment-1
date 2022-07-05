import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { regions } from './fixtures/restaurant';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const renderRegions = () => render((
    <Regions />
  ));

  it('regions가 렌더링된다', () => {
    const { getByText } = renderRegions();

    expect(getByText(regions[0].name)).not.toBeNull();
  });
});
