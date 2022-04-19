import { render } from '@testing-library/react';

import Regions from './Regions';

test('Regions', () => {
  const { queryByText } = render((
    <Regions />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/독도/)).not.toBeNull();
});
