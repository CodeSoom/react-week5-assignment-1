// Container Components: 레스토랑 목록을 가져오는 액션에 대한 테스트
import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
    categories: [],
  }));

  describe('dispatch', () => {
    it('calls action with setRestaurants', () => {
      const { queryByText } = render((<App />));

      expect(dispatch).toBeCalledWith({
        type: 'setRestaurants',
        payload: {
          restaurants: [],
        },
      });

      expect(queryByText(/한식/)).toBeNull();
    });
  });
});
