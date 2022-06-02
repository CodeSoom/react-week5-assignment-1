import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('renders', () => {
    const restaurants = [
      { id: 1, name: '홍콩반점' },
    ];

    const { container } = render((
      <Restaurants
        restaurants={restaurants}
      />
    ));

    expect(container).toHaveTextContent('홍콩반점');
  });
});
