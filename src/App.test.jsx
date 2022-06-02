import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import { SET_AREAS, SET_CATEGORIES } from './redux/reducer';
import areas from '../fixtures/areas';
import categories from '../fixtures/categories';

jest.mock('react-redux');

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

  describe('areas dispatch', () => {
    it('dispatch로 areas의 상태가 바뀐다', () => {
      expect(dispatch).toBeCalledWith({
        type: SET_AREAS,
        payload: { areas },
      });
    });
  });

  describe('categories dispatch', () => {
    it('dispatch로 categories의 상태가 바뀐다', () => {
      expect(dispatch).toBeCalledWith({
        type: SET_CATEGORIES,
        payload: { categories },
      });
    });
  });
});
