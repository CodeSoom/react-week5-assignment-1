import { render, screen, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  regions,
  region,
} from '../fixtures/staticData';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<RegionsContainer />);
  });

  useSelector.mockImplementation((selector) => selector({
    regions,
    region,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  test('renders regions', () => {
    expect(screen.queryByText('서울(V)')).not.toBeNull();
    expect(screen.queryByText('대전')).not.toBeNull();
    expect(screen.queryByText('대구')).not.toBeNull();
  });

  test('listens for click event on selectRegion', () => {
    fireEvent.click(screen.getByText('서울(V)'));

    expect(dispatch).toBeCalledWith({ type: 'selectRegion', payload: { regionName: '서울' } });
  });
});
