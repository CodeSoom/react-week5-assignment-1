import { render, screen } from '@testing-library/react';
import restaurants from './fixtures/restaurants';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  it('레스토랑 목록을 렌더한다.', () => {
    render(<Restaurants restaurants={restaurants} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
