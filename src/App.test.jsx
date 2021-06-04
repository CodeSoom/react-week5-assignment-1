import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
          { id: 3, name: '일식' },
          { id: 4, name: '양식' },
          { id: 5, name: '분식' },
        ],
        regions: ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'],
        selectedRestaurants: ['원초밥'],

        selected: {
          category: { id: null },
        },
      },
    }));
  });

  it('fetches categories and regions', () => {
    render(<App />);

    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalled();
  });

  it('renders categories', () => {
    const { getByRole } = render(<App />);

    ['한식', '중식', '일식', '양식', '분식'].forEach((category) => {
      expect(getByRole('button', { name: category })).toBeInTheDocument();
    });
  });

  it('renders regions', () => {
    const { getByRole } = render(<App />);

    ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'].forEach((region) => {
      expect(getByRole('button', { name: region })).toBeInTheDocument();
    });
  });

  it('renders selectedRestaurants', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('원초밥');
  });
});
