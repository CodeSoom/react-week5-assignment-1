import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('레스토랑 지역 목록 렌더링', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
    }));

    render(<App />);

    expect(dispatch).toBeCalled();
  });

  it('레스토랑 카테고리 목록 렌더링', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
    }));

    const { getByText } = render(<App />);

    expect(getByText('중식')).not.toBeNull();
  });
});
