import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import { restaurantsData } from '../fixtures';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  const renderRestaurantsContainer = () => render(<RestaurantsContainer />);

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: {
        regions: [],
        activeRegionName: '',
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
          activeRegionName: '',
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
  });
});
