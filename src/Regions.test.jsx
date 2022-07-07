import { fireEvent, render } from '@testing-library/react';

import regions from '../fixtures/regions';

import Regions from './Regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const renderRegions = () => render((
    <Regions
      regions={regions}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders regions', () => {
    const { container } = renderRegions();

    regions
      .map((region) => region.name)
      .forEach(
        (regionName) => expect(container).toHaveTextContent(regionName),
      );
  });

  it('listens click event', () => {
    const region = regions[2];

    const { getByRole } = renderRegions();

    fireEvent.click(getByRole('button', { name: region.name }));

    expect(handleClick).toHaveBeenCalledWith(region);
  });
});
