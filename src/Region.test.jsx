import React from 'react';

import { render } from '@testing-library/react';

import Region from './Region';

test('Region', () => {
  const name = '부산';

  const { getByText } = render((
    <Region name={name} />
  ));

  expect(getByText('부산')).not.toBeNull();
});
