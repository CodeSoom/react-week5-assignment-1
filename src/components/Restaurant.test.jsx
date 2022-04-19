import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

describe('Restaurant', () => {
  const restaurant = {
    id: 1,
    name: '두향',
    category: '한식',
    address: '성남시 분당구',
  };

  function renderRestaurant() {
    return render((
      <Restaurant
        restaurant={restaurant}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders restaurant', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent(/두향 | 한식 | 성남시 분당구/);
  });
});
