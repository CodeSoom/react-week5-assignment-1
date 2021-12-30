// Container Components: 레스토랑 목록을 가져오는 액션에 대한 테스트
import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
  }));

  const renderApp = () => render((<App />));

  describe('dispatch', () => {
    it('calls action to set restaurant', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('Restaurants');
    });
  });
});
