import { render } from '@testing-library/react';
import RestaurantList from './RestaurantList';
import { restaurants } from '../../fixtures/restaurant';

describe('RestaurantList', () => {
  it('restaurants를 전달하지 않으면 비어있습니다.', () => {
    const { queryAllByRole } = render(<RestaurantList />);

    expect(queryAllByRole('listitem')).toHaveLength(0);
  });

  it('restaurants를 전달하면 레스토랑 리스트를 보여줍니다.', () => {
    const { queryAllByRole, queryByText } = render(<RestaurantList restaurants={restaurants} />);

    expect(queryAllByRole('listitem')).toHaveLength(restaurants.length);
    restaurants.forEach(({ name }) => {
      expect(queryByText(name)).not.toBeNull();
    });
  });
});
