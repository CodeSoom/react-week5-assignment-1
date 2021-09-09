import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryContainer from './CategoryContainer';

jest.mock('react-redux');

describe('CategoryContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
    ],
    selectedCategory: {},
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches loadCategories', () => {
    const { getByText } = render(<CategoryContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalled();
  });

  it('renders categories', () => {
    const { container } = render(<CategoryContainer />);

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
    expect(container).toHaveTextContent('일식');
  });
});
