import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedRegionName: '',
    selectedCategoryId: '',
    selectedRestaurant: [],
  }));

  function renderRestaurantContainer() {
    return render((<RestaurantContainer />));
  }

  it('RestaurantContainer가 렌더링된다.', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('레스토랑 정보가 존재하지 않습니다.');
  });

  context('선택된 지역이나 카테고리가 없을 경우', () => {
    it('dispatch가 실행되지 않는다.', () => {
      renderRestaurantContainer();

      useSelector.mockImplementation((selector) => selector({
        selectedRegionName: '',
        selectedCategoryId: '',
        selectedRestaurant: [],
      }));

      jest.clearAllMocks();

      expect(dispatch).not.toBeCalled();
    });
  });

  context('선택된 지역과 카테고리가 있을 경우', () => {
    it('dispatch가 호출된다.', () => {
      useSelector.mockImplementation((selector) => selector({
        selectedRegionName: '서울',
        selectedCategoryId: '1',
        selectedRestaurant: restaurants,
      }));

      renderRestaurantContainer();

      expect(dispatch).toBeCalled();
    });
  });
});
