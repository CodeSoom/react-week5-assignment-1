import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  const { getByText } = render(<App />);

  expect(getByText(/Restaurant Information/)).not.toBeNull();

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
