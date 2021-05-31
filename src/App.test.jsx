import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector([]));
  });

  it('renders categories', () => {
    const categories = ['한식', '중식', '일식', '양식', '분식'];

    const { getByRole } = render(<App />);
    categories.forEach((category) => {
      expect(getByRole('button', { name: category }));
    });
  });
  it('renders regions', () => {
    const regions = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

    const { getByRole } = render(<App />);
    regions.forEach((region) => {
      expect(getByRole('button', { name: region }));
    });
  });
});
