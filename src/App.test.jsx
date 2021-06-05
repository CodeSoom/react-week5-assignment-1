import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { container } = render(<App />);

  expect(dispatch).toBeCalled();

  expect(container).toHaveTextContent('서울');
});
