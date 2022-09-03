import { render, fireEvent } from '@testing-library/react';
import given from 'given2';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: given.regions,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders regions', () => {
    given('regions', () => regions);

    const { getAllByRole } = render((
      <RegionsContainer />
    ));

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });
    expect(getAllByRole('listitem')).toHaveLength(regions.length);
  });

  it('renders button to listent to click event', () => {
    given('regions', () => regions);

    const { getAllByRole } = render((
      <RegionsContainer />
    ));

    const regionButtons = getAllByRole('button');

    regionButtons.forEach((regionButton) => {
      fireEvent.click(regionButton);

      expect(dispatch).toBeCalled();
    });
  });
});
