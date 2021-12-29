import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantsContainer from './RestaurantsContainer';
import { restaurants } from '../../fixtures/restaurant';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  it('restaurants가 존재한다면 레스토랑 리스트를 보여줍니다.', () => {
    useSelector.mockImplementation(() => ({ restaurants, selected: {} }));

    const { queryAllByRole } = render(<RestaurantsContainer />);

    expect(queryAllByRole('listitem')).toHaveLength(restaurants.length);
  });

  describe('선택한 지역과 분류에 따라 레스토랑 리스트를 업데이트 합니다.', () => {
    it('지역과 분류가 모두 선택되었다면 레스토랑 리스트를 업데이트 합니다.', () => {
      const mockDispatch = jest.fn();
      useDispatch.mockImplementation(() => mockDispatch);
      useSelector.mockImplementation(() => ({
        selected: {
          regionName: 'foo',
          categoryId: 1,
        },
      }));

      render(<RestaurantsContainer />);

      expect(mockDispatch).toBeCalledTimes(1);
    });

    it('지역, 분류 둘 중 하나만 선택되었다면 리스트를 업데이트 하지 않습니다.', () => {
      const mockDispatch = jest.fn();
      useDispatch.mockImplementation(() => mockDispatch);
      useSelector.mockImplementation(() => ({
        selected: {
          regionName: 'foo',
        },
      }));

      render(<RestaurantsContainer />);

      expect(mockDispatch).toBeCalledTimes(0);
    });
  });
});
