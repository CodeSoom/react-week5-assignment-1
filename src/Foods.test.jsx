import React from 'react';

import { render } from '@testing-library/react';

import Foods from './Foods';

test('Foods', () => {
  const foods = [
    {
      id: 1, name:'한식',
    },
  ];

  const { getByText } = render((
    <Foods foods={foods} />
  ));

  expect(getByText('한식')).not.toBeNull();
});