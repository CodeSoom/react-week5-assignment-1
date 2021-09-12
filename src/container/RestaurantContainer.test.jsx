import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedCategory: { id: 1, name: '한식' },
    selectedRegion: { id: 1, name: '서울' },
    restaurants: [{
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      information: '양천주가 in 서울 강남구 123456',
    }],
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches loadRestaurants', () => {
    render(<RestaurantContainer />);

    expect(typeof dispatch.mock.calls[0][0]).toBe('function');
  });

  it('renders restaurants', () => {
    const { container } = render(<RestaurantContainer />);

    expect(container).toHaveTextContent('양천주가');
  });
});
