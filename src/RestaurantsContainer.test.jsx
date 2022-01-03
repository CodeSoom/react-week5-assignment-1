import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../__fixtures__/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
      selectedRegion: { id: 1, name: '서울' },
      selectedCategory: { id: 1, name: '한식' },
      restaurants,
    }));

    const { getByText } = render(
      <RestaurantsContainer />,
    );

    restaurants.forEach((restaurant) => {
      expect(getByText(restaurant.name)).toBeInTheDocument();
    });
  });

  it('selected region and category, call dispatch', () => {
    useSelector.mockImplementation((selector) => selector({
      selectedRegion: { id: 1, name: '서울' },
      selectedCategory: { id: 1, name: '한식' },
      restaurants,
    }));

    render(
      <RestaurantsContainer />,
    );

    // TODO: thunk function 테스트로 수정
    expect(dispatch).toBeCalled();
    // expect(dispatch).toBeCalledWith('서울', 1);
  });

  it('not selected region and category, doesn\'t call dispatch', () => {
    useSelector.mockImplementation((selector) => selector({
      selectedRegion: '',
      selectedCategory: '',
      restaurants,
    }));

    render(
      <RestaurantsContainer />,
    );

    expect(dispatch).not.toBeCalled();
  });
});
