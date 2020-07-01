import React from 'react';

import { render } from '@testing-library/react';

import Category from './Category';

test('Category', () => {
  const name = '한식';

  const { getByText } = render((
    <Category name={name} />
  ));

  expect(getByText(name)).not.toBeNull();
});
