import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import state from '../fixtures/state';

import App from './App';

jest.mock('react-redux');

const dispatch = useDispatch();

describe('App', () => {
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: state.categories,
    regions: state.regions,
    restaurants: state.restaurants,
    currentRegionId: state.currentRegionId,
    currentCategoryId: state.currentCategoryId,
  }));
  it('renders regions', () => {
    render(<App />);
    expect(screen.getByText('서울')).toBeInTheDocument();
  });
});
