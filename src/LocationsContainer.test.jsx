import { render } from '@testing-library/react';

import LocationsContainer from './LocationsContainer';

test('LocationsContainer', () => {
  const { queryByText } = render((
    <LocationsContainer />
  ));

  expect(queryByText('서울')).not.toBeNull();
});
