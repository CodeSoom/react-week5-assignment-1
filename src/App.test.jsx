import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect((getByText('서울'))).not.toBeNull();

  expect((getByText('한식'))).not.toBeNull();
});
