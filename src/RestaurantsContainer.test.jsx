import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { RESTAURANTS } from './fixture';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('RestaurantsCotainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categoryId: { id: 1, name: '카페' },
    region: { id: 1, name: '수원' },
    restaurants: RESTAURANTS,
  }));

  it('식당 목록을 보여준다', () => {
    const { container } = render(<RestaurantsContainer />);

    expect(container).toHaveTextContent('앙쳔주가');
  });
});
