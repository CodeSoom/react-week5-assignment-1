import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');
jest.mock('./services/api.js');

describe('CategoriesContainer', () => {
  it('renders categories', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],

    }));

    const { container, getByText } = render(<CategoriesContainer />);

    expect(container).toHaveTextContent(/한식/);

    fireEvent.click(getByText('한식'));
    expect(dispatch).toBeCalled();
  });

  context('selectedCategory is null', () => {
    it('renders selectedCategory.name + (V)', () => {
      useSelector.mockImplementation((selector) => selector({
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
        ],
        selectedCategory: { id: 1, name: '한식' },
      }));

      const { getByText } = render(<CategoriesContainer />);

      expect(getByText('한식(V)')).not.toBeNull();
      expect(getByText('중식')).not.toBeNull();
    });
  });
  context('selectedCategory is not null', () => {
    it('renders only categories name', () => {
      useSelector.mockImplementation((selector) => selector({
        categories: [{ id: 1, name: '한식' }],
        selectedCategory: null,
      }));

      const { container } = render(<CategoriesContainer />);

      expect(container).toHaveTextContent('한식');
      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
