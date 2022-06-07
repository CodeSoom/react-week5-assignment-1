import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import state from '../../fixtures/state';

import Regions from './Regions';

jest.mock('react-redux');

const dispatch = jest.fn();

describe('Regions', () => {
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: state.regions,
    currentRegionId: state.currentRegionId,
  }));

  it('renders regions', () => {
    render(<Regions />);

    fireEvent.click(screen.getByText('서울'));

    expect(dispatch).toBeCalledWith({
      type: 'setCurrentRegionId',
      payload: {
        currentRegionId: 1,
      },
    });
  });
});
