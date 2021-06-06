import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

describe('RestaurantsContainer', () => {
  it('renders RestaurantsContainer', () => {
    const { queryByText } = render(<RestaurantsContainer />);

    expect(queryByText('양천주가')).not.toBeNull();
  });
});
