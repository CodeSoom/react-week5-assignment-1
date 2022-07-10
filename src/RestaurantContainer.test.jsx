import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

describe('<RestaurantContainer/>', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selectedRegion: { id: 1, name: '서울' },
    selectedCategory: { id: 1, name: '한식' },
    restaurants: [{
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구 123456',
      information: '양천주가 in 서울 강남구 123456',
    }],
  }));

  const renderRestaurantContainer = () => ((
    render(<RestaurantContainer />)
  ));

  it('renders restaurants', () => {
    const { container } = renderRestaurantContainer();

    expect(container).toHaveTextContent('양천주가');
  });
});
