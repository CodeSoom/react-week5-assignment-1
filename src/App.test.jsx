import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { container } = render(<App />);

  expect(container).toHaveTextContent('서울');
});
