import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';

describe('App', () => {
  jest.mock('react-redux');
  jest.mock('./services/api');

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation(() => ({
    regionData: [{ id: 1, name: '서울' }, { id: 2, name: '부산' }],
    categoryData: [{ id: 1, name: '한식' }, { id: 2, name: '양식' }],
    restaurantData: [{ id: 1, name: '코코식당' }, { id: 2, name: '네네식당' }],
    selectedData: { selectedRegion: { id: 1, name: '서울' }, selectedCategory: { id: 1, name: '한식' } },
  }));

  const renderApp = () => render(<App />);

  describe('RegionContainer가 렌더링 된다.', () => {
    it('지역정보들이 input으로 보인다.', () => {
      const { getByText } = renderApp();
      expect(getByText(/부산/)).not.toBeNull();
      expect(getByText(/서울/)).not.toBeNull();
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
        restaurantData: [
          { id: 1, name: '바뀐식당' }, { id: 2, name: '무슨식당' },
        ],
      }));
      const { getByText } = renderApp();
      expect(getByText('바뀐식당')).not.toBeNull();
      expect(getByText('무슨식당')).not.toBeNull();
    });
  });
});
