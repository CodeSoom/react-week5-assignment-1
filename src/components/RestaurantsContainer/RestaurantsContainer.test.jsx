import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import given from 'given2';
import RestaurantsContainer from './RestaurantsContainer';
import { categories, locations, restaurants } from '../../fixtures';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  given('selected', () => ({
    location: locations[0],
    category: categories[0],
  }));

  given('restaurants', () => []);

  beforeEach(() => {
    dispatch.mockRestore();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selected: given.selected,
      restaurants: given.restaurants,
    }));
  });

  context('지역과 카테고리가', () => {
    it('선택되지 않은 경우, "지역과 카테고리를 선택해주세요"를 노출한다.', async () => {
      given('selected', () => ({
        selected: {
          location: null,
          category: null,
        },
      }));

      const { getByText } = render(<RestaurantsContainer />);
      expect(getByText(/지역과 카테고리를 선택해주세요/)).not.toBeNull();
    });

    it('선택되어있는 경우, 레스토랑 목록을 불러오기위해 dispatch한다.', () => {
      render(<RestaurantsContainer />);

      expect(dispatch).toBeCalled();
    });
  });

  context('레스토랑 목록이', () => {
    it('존재하는 경우, 레스토랑목록을 노출한다.', async () => {
      given('restaurants', () => restaurants);
      const { getByText } = render(<RestaurantsContainer />);

      expect(getByText(/양천주가/)).not.toBeNull();
    });

    it('존재하지 않는 경우, "레스토랑이 존재하지 않습니다."를 노출한다.', async () => {
      const { getByText } = render(<RestaurantsContainer />);

      expect(getByText(/레스토랑이 존재하지 않습니다./)).not.toBeNull();
    });
  });
});
