import { render, screen } from '@testing-library/react';
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
    expect(screen.getByText('서울(V)')).not.toBeNull();
    expect(screen.getByText('대전')).not.toBeNull();
    expect(screen.getByText('대구')).not.toBeNull();
  });
});
