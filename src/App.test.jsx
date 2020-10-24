import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const regions = [
    {id: 1, name: '서울'},
    {id: 2, name: '대전'},
    {id: 3, name: '대구'},
    {id: 4, name: '부산'},
    {id: 5, name: '광주'},
    {id: 6, name: '강원도'},
    {id: 7, name: '인천'},
  ];
  const { getByText } = render((
    <App regions={regions} />
  ));

  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대구')).not.toBeNull();
  expect(getByText('강원도')).not.toBeNull();
});