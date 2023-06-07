import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import {
  regions, categories, restaurants, selectedRegionAndCategory,
} from '../fixtures/data';

describe('App', () => {
  jest.mock('react-redux');
  jest.mock('./services/api');

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation(() => ({
    regions,
    categories,
    restaurants,
    selectedRegionAndCategory,
  }));

  const renderApp = () => render(<App />);

  describe('RegionContainer가 렌더링 된다.', () => {
    it('지역정보들이 input으로 보인다.', () => {
      const { getByText } = renderApp();
      regions.forEach((region) => expect(getByText(new RegExp(`[${region.name}]`))).not.toBeNull());
    });

    it('input 클릭시 상태가 업데이트된다.', () => {
      const { getByText } = renderApp();
      fireEvent.click(getByText(/서울/));
      expect(dispatch).toBeCalled();
    });

    it('선택된 input은 v가 표시된다.', () => {
      const { getByText } = renderApp();
      expect(getByText('서울 v')).not.toBeNull();
    });
  });

  describe('CategoryContainer가 렌더링 된다.', () => {
    it('카테고리 목록이 input으로 보인다.', () => {
      const { getByText } = renderApp();
      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/양식/)).not.toBeNull();
    });

    it('카테고리 input 클릭시 상태가 업데이트된다.', () => {
      const { getByText } = renderApp();
      fireEvent.click(getByText(/한식/));
      expect(dispatch).toBeCalled();
    });

    it('선택된 input은 v가 표시된다.', () => {
      const { getByText } = renderApp();
      expect(getByText('한식 v')).not.toBeNull();
    });
  });

  describe('RestaurantContainer가 렌더링 된다.', () => {
    it('불러온 레스토랑 데이터들이 보인다.', () => {
      const { getByText } = renderApp();
      expect(getByText(/코코식당/)).not.toBeNull();
      expect(getByText(/네네식당/)).not.toBeNull();
    });
    it('선택된 식당이 바뀌면 ', () => {
      useSelector.mockImplementation(() => ({
        restaurants: [
          { id: 1, name: '바뀐식당' }, { id: 2, name: '무슨식당' },
        ],
      }));
      const { getByText } = renderApp();
      expect(getByText('바뀐식당')).not.toBeNull();
      expect(getByText('무슨식당')).not.toBeNull();
    });
  });
});
