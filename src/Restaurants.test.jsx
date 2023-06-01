import { render } from '@testing-library/react';
import Restaurants from './Restaurants';

describe('RestaurantsContainer', () => {
  const restaurantData = [
    { id: 1, name: '코코식당' }, { id: 2, name: '네네식당' },
  ];

  const renderRestaurants = () => render(<Restaurants restaurantData={restaurantData} />);

  it('식당 리스트가 보인다', () => {
    const { getByText } = renderRestaurants();
    expect(getByText('코코식당')).not.toBeNull();
    expect(getByText('네네식당')).not.toBeNull();
  });
});
