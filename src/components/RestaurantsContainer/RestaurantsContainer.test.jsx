import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockRestore();
    useDispatch.mockImplementation(() => dispatch);
  });

  context('지역과 카테고리가', () => {
    it('선택되지 않은 경우, "지역과 카테고리를 선택해주세요"를 노출한다.', async () => {
      useSelector.mockImplementation((selector) => selector({
        selected: {
          location: null,
          category: null,
        },
      }));

      const { getByText } = render(<RestaurantsContainer />);
      expect(getByText(/지역과 카테고리를 선택해주세요/)).not.toBeNull();
    });

    it('선택되어있는 경우, 레스토랑 목록을 불러오기위해 dispatch한다.', () => {
      const location = { id: 1, name: '서울' };
      const category = { id: 1, name: '한식' };
      useSelector.mockImplementation((selector) => selector({
        selected: {
          location,
          category,
        },
      }));

      render(<RestaurantsContainer />);

      expect(dispatch).toBeCalled();
    });

    it('변경된 경우, 레스토랑 목록을 불러오기위해 dispatch한다.', () => {
      const location = { id: 1, name: '서울' };
      const category = { id: 1, name: '한식' };
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          {
            id: 1, categoryId: 1, name: '양천주가', address: '서울 강남구 123456', information: '양천주가 in 서울 강남구 123456',
          },
          {
            id: 6, categoryId: 1, name: '한국식 초밥', address: '서울 강남구', information: '한국식 초밥 in 서울 강남구',
          },
        ],
        locations: [
          { id: 1, name: '서울' },
          { id: 2, name: '대전' },
        ],
        selected: {
          location,
          category,
        },
      }));

      render(<RestaurantsContainer />);
      // TODO: 선택된 항목을 변경햇을때, dispatch가 작동하는지 확인하는 테스트 추가

      expect(dispatch).toBeCalled();
    });
  });

  context('레스토랑 목록이', () => {
    it('존재하지 않는 경우, "레스토랑이 존재하지 않습니다."를 노출한다.', async () => {
      const location = { id: 1, name: '서울' };
      const category = { id: 1, name: '한식' };
      useSelector.mockImplementation((selector) => selector({
        selected: {
          location,
          category,
        },
      }));

      const { getByText } = render(<RestaurantsContainer />);
      expect(getByText(/레스토랑이 존재하지 않습니다./)).not.toBeNull();
    });
  });
});
