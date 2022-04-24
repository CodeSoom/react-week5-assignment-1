import { render } from '@testing-library/react';

import given from 'given2';
import Restaurants from './Restaurants';

import restaurants from '../fixture/restaurants';

describe('Restaurants', () => {
  beforeEach(() => {
    given('selectRegion', () => true);
    given('selectCategory', () => true);
    given('loading', () => false);
    given('restaurants', () => restaurants);
  });

  const renderRestaurants = () => render((
    <Restaurants
      restaurants={given.restaurants}
      isSelectRegion={given.selectRegion}
      isSelectCategory={given.selectCategory}
      loading={given.loading}
    />
  ));

  context('wihout select region', () => {
    given('selectRegion', () => false);

    it('renders "지역을 선택해주세요!"', () => {
      const { container } = renderRestaurants();

      expect(container).toHaveTextContent('지역을 선택해주세요!');
    });
  });

  context('wihout select category', () => {
    given('selectCategory', () => false);

    it('renders "분류를 선택해주세요!"', () => {
      const { container } = renderRestaurants();

      expect(container).toHaveTextContent('분류를 선택해주세요!');
    });
  });

  context('when loading', () => {
    given('loading', () => true);

    it('renders "레스토랑 목록을 불러오고 있습니다."', () => {
      const { container } = renderRestaurants();

      expect(container).toHaveTextContent('레스토랑 목록을 불러오고 있습니다.');
    });
  });

  context('without restaurants', () => {
    given('restaurants', () => []);

    it('renders "조건에 맞는 레스토랑이 없습니다.', () => {
      const { container } = renderRestaurants();

      expect(container).toHaveTextContent('조건에 맞는 레스토랑이 없습니다.');
    });
  });

  context('with restaurants', () => {
    given('restaurants', () => restaurants);

    it('renders Restaurants', () => {
      const { container } = renderRestaurants();

      expect(container).toHaveTextContent('서울식당');
    });
  });
});
