import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  regions,
} from '../fixtures/staticData';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  beforeEach(() => {
    render(<RegionsContainer />);
  });

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  test('renders regions', () => {
    expect(screen.getByText('서울(V)')).not.toBeNull();
    expect(screen.getByText('대전')).not.toBeNull();
    expect(screen.getByText('대구')).not.toBeNull();
  });
});
