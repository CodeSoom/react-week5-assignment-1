import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import state from '../fixtures/state';
import Categories from './Categories';

jest.mock('react-redux');

const dispatch = jest.fn();

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

    fireEvent.click(screen.getByText('한식'));
    expect(dispatch).toBeCalledWith({
      type: 'setCurrentCategoryId',
      payload: {
        currentCategoryId: 1,
      },
    });
  });
});
