import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import initialState from '../../fixture/initialState';
import restaurants from '../../fixture/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockReset();
  });

  context('지역과 카테고리를 선택했으면', () => {
    it('레스토랑 목록을 호출한다.', () => {
      useSelector.mockImplementation((selector) => selector({
        ...initialState,
        restaurants,
        selectedRegion: '서울',
        selectedCategoryId: 1,
      }));
      render(<RestaurantsContainer />);

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('지역이과 카테고리를 선택하지 않았으면', () => {
    it('레스토랑 목록을 호출하지 않는다.', () => {
      useSelector.mockImplementation((selector) => selector({
        ...initialState,
        restaurants,
      }));
      render(<RestaurantsContainer />);

      expect(dispatch).toBeCalledTimes(0);
    });
  });
});
