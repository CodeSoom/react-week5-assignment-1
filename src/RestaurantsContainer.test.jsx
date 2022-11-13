import { render, screen } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants, categories, regions } from '../fixtures/data';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  const loadRestaurants = jest.fn();

  const selectedCategoryId = categories[0].id;
  const selectedRegion = regions[0];

  useDispatch.mockImplementation(() => dispatch);

  const renderRestaurantsContainer = () => render((
    <RestaurantsContainer />
  ));

  context('선택한 지역과 카테고리 데이터가 있을 시', () => {
    const mockSelector = () => useSelector.mockImplementation(
      (selector) => selector({
        restaurants,
        selectedRegion,
        selectedCategoryId,
      }),
    );

    it('dispatch가 실행한다', () => {
      mockSelector();
      renderRestaurantsContainer();

      expect(dispatch).toBeCalled();
    });

    it('레스토랑 목록이 랜더링된다', () => {
      mockSelector();
      renderRestaurantsContainer();

      expect(screen.queryByText('양천주가')).not.toBeNull();
    });
  });

  context('선택한 지역 혹은 카테고리 아이디가 없을 시', () => {
    it('dispatch가 실행되지 않는다', () => {
      useSelector.mockImplementation((state) => state({
        restaurants: [],
        selectedRegion: '',
        selectedCategoryId: '',
      }));

      renderRestaurantsContainer();

      expect(dispatch).not.toBeCalled();

      expect(loadRestaurants).not.toBeCalled();
    });

    it('레스토랑이 없어요! 문구가 랜더링된다', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
      }));

      const { container } = renderRestaurantsContainer([]);

      expect(container).toHaveTextContent('레스토랑이 없어요!');
    });
  });
});
