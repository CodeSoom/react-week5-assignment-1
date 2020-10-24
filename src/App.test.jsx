import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const regions = [
    {
      id: 1, name: '서울',
    },
  ];
  const { getByText } = render((
    <App regions={regions} />
  ));

  expect(getByText('서울')).not.toBeNull();
});