import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [{ id: 1, name: '한식' }],
  }));

  const { getByText } = render(<App />);

  expect(getByText(/Restaurant Information/)).not.toBeNull();
});
