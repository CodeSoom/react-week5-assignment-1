import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import state from '../fixtures/state';
import Regions from './Regions';

jest.mock('react-redux');

const dispatch = useDispatch();

describe('Regions', () => {
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: state.regions,
    currentRegionId: state.currentRegionId,
  }));
  it('renders regions', () => {
    const handleClick = jest.fn();

    render(<Regions
      regions={state.regions}
      currentRegionId={state.currentRegionId}
      onClick={handleClick}
    />);

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button, index) => {
      expect(button).toHaveValue(String(state.regions[index].id));
    });
  });
});
