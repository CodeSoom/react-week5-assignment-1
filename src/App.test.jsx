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
    currentContent: {
      region: '',
      category: 0,
    },
  }));

  const { queryByText } = render(<App />);

  expect(queryByText(/Restaurant Information/)).not.toBeNull();

  beforeEach(() => {
    jest.clearAllMocks();
  });
});
