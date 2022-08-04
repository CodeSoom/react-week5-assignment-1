import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import {
  categories,
  category,
} from '../fixtures/staticData';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(<CategoriesContainer />);
  });

  useSelector.mockImplementation((selector) => selector({
    categories,
    category,
  }));

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  test('renders categories', () => {
    expect(screen.queryByText('한식(V)')).not.toBeNull();
    expect(screen.queryByText('중식')).not.toBeNull();
    expect(screen.queryByText('일식')).not.toBeNull();
  });
});
