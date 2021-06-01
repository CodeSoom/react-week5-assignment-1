import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({}));

  const { container } = render(<App />);

  expect(container).toHaveTextContent('서울');
});
