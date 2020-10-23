import React from 'react';

import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

test('Restaurant', () => {
  const { queryByText } = render((
    <Restaurant
      name="김초밥"
    />
  ));

  expect(queryByText(/김초밥/)).not.toBeNull();
});
