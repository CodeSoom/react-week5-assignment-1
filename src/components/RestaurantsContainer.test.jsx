import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import restaurants from '../../fixture/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
    selectedRegion: '서울',
    selectedCategoryId: 1,
  }));

  it('레스토랑 목록을 호출한다.', () => {
    render(<RestaurantsContainer />);

    expect(dispatch).toBeCalledTimes(1);
  });
});
