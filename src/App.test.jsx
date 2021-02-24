import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { queryByText } = render((<App />));
  
  expect(queryByText('서울')).not.toBeNull();
  expect(queryByText('대전')).not.toBeNull();
  expect(queryByText('대구')).not.toBeNull();
  expect(queryByText('부산')).not.toBeNull();
  expect(queryByText('광주')).not.toBeNull();
  expect(queryByText('강원도')).not.toBeNull();
  expect(queryByText('인천')).not.toBeNull();

  expect(queryByText('한식')).not.toBeNull();
  expect(queryByText('중식')).not.toBeNull();
  expect(queryByText('일식')).not.toBeNull();
  expect(queryByText('양식')).not.toBeNull();
  expect(queryByText('분식')).not.toBeNull();
});
