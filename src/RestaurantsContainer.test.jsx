import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import RestaurantsContainer from './RestaurantsContainer';

test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector(
    { restaurants },
  ));
  const { getByText } = render(<RestaurantsContainer />);

  expect(getByText('한국식 초밥')).not.toBeNull();
});
