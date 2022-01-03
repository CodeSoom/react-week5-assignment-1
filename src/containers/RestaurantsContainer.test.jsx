import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import { regionsData, categoriesData, restaurantsData } from '../fixtures';
import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  const renderRestaurantsContainer = () => render(<RestaurantsContainer />);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: {
        regions: [],
        activeId: -1,
      },
      categories: {
        categories: [],
        activeId: -1,
      },
      restaurants: {
        restaurants: [],
      },
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  context('식당정보가 없으면,', () => {
    it('사용자에게 안내 메시지를 보여준다.', () => {
      const { getByText } = renderRestaurantsContainer();

      expect(getByText(/식당 정보가 없습니다./)).toBeInTheDocument();
    });
  });

  context('식당정보가 있으면,', () => {
    it('식당정보를 화면에 보여준다.', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: {
          regions: [],
          activeId: -1,
        },
        categories: {
          categories: [],
          activeId: -1,
        },
        restaurants: {
          restaurants: restaurantsData,
        },
      }));

      const { getByText } = renderRestaurantsContainer();

      expect(getByText(restaurantsData[0].name)).not.toBeNull();
      expect(getByText(restaurantsData[1].name)).not.toBeNull();
    });

    it('regionActiveId와 categoryActiveId가 존재하면, loadRestaurants 액션이 디스패치된다.', () => {
      useSelector.mockImplementation((selector) => selector({
        regions: {
          regions: regionsData,
          activeId: 1,
        },
        categories: {
          categories: categoriesData,
          activeId: 1,
        },
        restaurants: {
          restaurants: restaurantsData,
        },
      }));

      renderRestaurantsContainer();

      expect(dispatch).toBeCalled();
    });
  });
});
