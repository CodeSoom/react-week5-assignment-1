import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';
import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixture/restaurants';

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    given('selector', () => ({
      selectRegionId: 1,
      selectCategoryId: 1,
      restaurants,
    }));
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector(given.selector));

  const renderRestaurantsContainer = () => render((
    <RestaurantsContainer />
  ));

  context('without select region id', () => {
    given('selector', () => ({
      restaurants: [],
    }));

    it('renders "지역을 선택해주세요!"', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('지역을 선택해주세요!');
    });
  });

  context('without select category id', () => {
    given('selector', () => ({
      restaurants: [],
      selectRegionId: 1,
    }));

    it('renders "분류를 선택해주세요!"', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('분류를 선택해주세요!');
    });
  });

  context('when loading', () => {
    given('selector', () => ({
      restaurants: [],
      selectRegionId: 1,
      selectCategoryId: 1,
      loading: true,
    }));

    it('renders "레스토랑 목록을 불러오고 있습니다."', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('레스토랑 목록을 불러오고 있습니다.');
    });
  });

  context('without restaurants', () => {
    given('selector', () => ({
      restaurants: [],
      selectRegionId: 1,
      selectCategoryId: 1,
      loading: false,
    }));

    it('renders "조건에 맞는 레스토랑이 없습니다.', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('조건에 맞는 레스토랑이 없습니다.');
    });
  });

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { container } = renderRestaurantsContainer();

      expect(container).toHaveTextContent('서울식당');
    });
  });
});
