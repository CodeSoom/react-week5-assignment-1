import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../fixtures/regions';

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

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders fetched regions', () => {
    const { container } = render(<RegionsContainer />);

    expect(dispatch).toHaveBeenCalledWith(loadRegions());
    regions
      .map((region) => region.name)
      .forEach(
        (regionName) => expect(container).toHaveTextContent(regionName),
      );
  });
});
