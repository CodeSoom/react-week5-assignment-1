import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { container } = render(
    <App />,
  );
  expect(container).toHaveTextContent('서울');
  expect(container).toHaveTextContent('한식');
});
