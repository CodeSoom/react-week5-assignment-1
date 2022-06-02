import { render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import state from '../fixtures/state';
import Categories from './Categories';

jest.mock('react-redux');

const dispatch = useDispatch();

describe('Categories', () => {
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: state.categories,
    currentCategoryId: state.currentCategoryId,
  }));
  it('renders Categories', () => {
    const handleClick = jest.fn();

    render(<Categories
      categories={state.categories}
      currentCategoryId={state.currentCategoryId}
      onClick={handleClick}
    />);

    state.categories.forEach((category) => {
      expect(screen.getByText(category.name)).toHaveValue(String(category.id));
    });
  });
});
