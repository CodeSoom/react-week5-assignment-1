import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders regions list', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));

    const { getAllByRole } = render((
      <RegionsContainer />
    ));

    regions.forEach((region, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(region.name);
    });
  });
});
