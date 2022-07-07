import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/regions';

import { selectRegion } from './actions';

import { loadRegions } from './async-actions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./async-actions');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    regions,
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
});
