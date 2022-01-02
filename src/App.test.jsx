import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import { initialState } from './reducer';

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
    useSelector.mockImplementation((selector) => selector(initialState));

    render(<App />);

    expect(dispatch).toBeCalled();
  });

  it('레스토랑 카테고리 목록 렌더링', () => {
    useSelector.mockImplementation((selector) => selector({
      ...initialState,
      categories: [{
        id: 2,
        name: '중식',
      }],
    }));

    const { getByText } = render(<App />);

    expect(getByText('중식')).not.toBeNull();
  });
});
