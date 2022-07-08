import { fireEvent, render } from '@testing-library/react';

import regions from '../fixtures/regions';

import Regions from './Regions';

describe('Regions', () => {
  const initialRegion = regions[2];

  const handleClick = jest.fn();

  const renderRegions = ({ selectedRegion } = {}) => render((
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
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
    const { getByRole } = renderRegions();

    fireEvent.click(getByRole('button', { name: initialRegion.name }));

    expect(handleClick).toHaveBeenCalledWith(initialRegion);
  });

  it('renders check mark (V) with the selected region', () => {
    const { getByRole } = renderRegions({ selectedRegion: initialRegion });

    expect(getByRole('button', { name: `${initialRegion.name}(V)` })).toBeInTheDocument();
  });
});
