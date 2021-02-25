import React from 'react';

import { render } from '@testing-library/react';

import Items from './Items';

import region from '../fixtures/region';
import category from '../fixtures/category';

test('Items', () => {
  const { queryByText } = render((
    <Items
      region={region}
      category={category}
    />
  ));

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/한식/)).not.toBeNull();
});
