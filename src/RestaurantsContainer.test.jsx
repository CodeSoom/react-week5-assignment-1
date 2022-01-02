import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  const { getByText } = render(<RestaurantsContainer />);

  expect(getByText('양천주가')).not.toBeNull();
});
