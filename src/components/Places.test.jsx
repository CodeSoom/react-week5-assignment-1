import { render } from '@testing-library/react';

import Places from './Places';

import places from '../../fixtures/places';

test('Places', () => {
  const { getByText } = render((
    <Places places={places} />
  ));

  expect(getByText(/서울/)).not.toBeNull();
});
