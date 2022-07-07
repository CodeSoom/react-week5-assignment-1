import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { regions } from './fixtures/restaurant';

import Regions from './Regions';

jest.mock('react-redux');

describe('Regions', () => {
  const handleClickSelectRegion = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const renderRegions = () => render((
    <Regions regions={regions} onClickSelectRegion={handleClickSelectRegion} />
  ));

  it('regions가 렌더링된다', () => {
    const { container } = renderRegions();

    expect(container).toHaveTextContent(regions[0].name);
  });
});
