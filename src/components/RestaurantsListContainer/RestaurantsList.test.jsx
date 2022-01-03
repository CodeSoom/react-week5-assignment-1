import { render } from '@testing-library/react';
import RestaurantsList from './RestaurantsList';

describe('Restaurants', () => {
  it('renders restaurants list', () => {
    render(<RestaurantsList restaurants={[{ id: 1, name: '김밥천국' }]} />);
  });
});
