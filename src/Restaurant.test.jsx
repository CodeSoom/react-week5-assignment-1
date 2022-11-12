import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import restaurants from '../fixtures/restaurants';

describe('Restaurant', () => {
  function renderRestaurant(restaurantLists) {
    return render((<Restaurant restaurants={restaurantLists} />));
  }

  context('선택된 지역과 카테고리에 맞는 레스토랑 정보가 있을 경우', () => {
    it('선택된 Restaurants 목록이 렌더링된다.', () => {
      const { getByText } = renderRestaurant(restaurants);

      expect(getByText('양천주가')).not.toBeNull();
    });
  });

  context('선택된 지역과 카테고리에 맞는 레스토랑 정보가 없을 경우', () => {
    it('정보가 없다는 안내 문구가 렌더링된다.', () => {
      const { container } = renderRestaurant([]);

      expect(container).toHaveTextContent('레스토랑 정보가 존재하지 않습니다.');
    });
  });
});
