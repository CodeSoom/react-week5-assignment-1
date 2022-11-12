import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selectedRegion: '서울',
    selectedCategory: '한식',
    restaurants,
  }));

  function renderRestaurantContainer() {
    return render((<RestaurantContainer />));
  }

  it('RestaurantContainer가 렌더링된다.', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('양천주가');
  });

  context('선택된 지역이나 카테고리가 없을 경우', () => {
    it('dispatch가 호출되지 않는다.', () => {

    });
  });

  context('선택된 지역이나 카테고리가 있을 경우', () => {

  });
});
