import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const { getByTest } = render(<App />);

  expect(getByTest(/Restaurant Information/)).not.toBeNull();
});
