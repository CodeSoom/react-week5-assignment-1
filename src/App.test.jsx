import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const Regions = ['서울', '대전', '대구'];

  const { getByText } = render((
    <App />
  ));

  Regions.forEach((region) => {
    expect(getByText(region)).not.toBeNull();
  });
});
