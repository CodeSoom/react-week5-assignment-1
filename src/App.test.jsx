import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(
      {
        selected: {
          category: { id: null, name: null },
          groups: { id: null, name: null },
          restaurants: [],
        },
        groups: {
          categories: [
            { id: 1, name: '한식' },
            { id: 2, name: '중식' },
            { id: 3, name: '일식' },
            { id: 4, name: '양식' },
            { id: 5, name: '분식' },
          ],
          regions: ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'],
        },
      },
    ));
  });

  it('fetches groups', () => {
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
});
