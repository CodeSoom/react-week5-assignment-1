import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import {
  categories,
  category,
} from '../fixtures/staticData';

jest.mock('react-redux');
jest.mock('./services/api');

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

    expect(dispatch).toBeCalled();
  });

  test('listens for click event on selectCategory', () => {
    fireEvent.click(screen.getByText('한식(V)'));

    expect(dispatch).toBeCalledWith({ type: 'selectCategory', payload: { categoryName: '한식' } });
  });
});
