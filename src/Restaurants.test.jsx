import { render } from '@testing-library/react';

import Restaurants from './Restaurants';
import { restaurantsData } from './fixtures';

describe('Restaurants', () => {
  const renderRestaurants = (restaurants) => render(<Restaurants restaurants={restaurants} />);

  context('식당 정보가 없으면,', () => {
    it('사용자에게 안내 메시지를 보여준다.', () => {
      const restaurants = [];
      const { getByText } = renderRestaurants(restaurants);

      expect(getByText(/지역과 카테고리를 선택하세요./)).toBeInTheDocument();
    });
  });

  context('식당 정보가 있으면,', () => {
    it('식당 정보를 화면에 보여준다.', () => {
      const { getByText } = renderRestaurants(restaurantsData);

      expect(getByText(restaurantsData[0].name)).not.toBeNull();
      expect(getByText(restaurantsData[1].name)).not.toBeNull();
      expect(getByText(restaurantsData[2].name)).not.toBeNull();
    });
  });
});
