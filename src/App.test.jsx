import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import locations from '../fixtures/locations';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    locations,
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(queryByText('서울')).not.toBeNull();

  expect(queryByText('한식')).not.toBeNull();
});
