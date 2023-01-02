import { render, screen } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('레스토랑 목록을 렌더한다.', () => {
    const restaurants = [{ id: 1, name: '야미야미' }];

    render(<Restaurants restaurants={restaurants} />);

    expect(screen.getByRole('listitem')).toHaveTextContent('야미야미');
  });
});
