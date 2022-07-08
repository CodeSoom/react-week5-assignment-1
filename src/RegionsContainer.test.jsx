import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/regions';

import { selectRegion } from './actions';

import { loadRegions } from './async-actions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./async-actions');

describe('RegionsContainer', () => {
  const selectedRegion = regions[1];

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    regions,
    selectedRegion,
  }));

  const renderRegionsContainer = () => render(<RegionsContainer />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders fetched regions', () => {
    const { container } = renderRegionsContainer();

    expect(dispatch).toHaveBeenCalledWith(loadRegions());
    regions
      .map((region) => region.name)
      .forEach(
        (regionName) => expect(container).toHaveTextContent(regionName),
      );
  });

  it('dispatches a selectRegion action when region is clicked', () => {
    const region = regions[2];

    const { getByRole } = renderRegionsContainer();

    fireEvent.click(getByRole('button', { name: region.name }));

    expect(dispatch).toHaveBeenCalledWith(selectRegion(region));
  });

  it('renders check mark (V) with the selected region', () => {
    const { getByRole } = renderRegionsContainer();

    expect(getByRole('button', { name: `${selectedRegion.name}(V)` })).toBeInTheDocument();
  });
});
