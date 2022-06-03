import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    areas: [],
    categories: [],
  }));

  const { getByText } = render((
    <App />
  ));

  describe('제목 표시', () => {
    it('제목이 보인다', () => {
      expect(getByText(/지역/)).not.toBeNull();
      expect(getByText(/카테고리/)).not.toBeNull();
    });
  });

  describe('dispatch', () => {
    it('dispatch가 2번 발생한다.', () => {
      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
