import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [],
  }));

  const { queryByText } = render((
    <App />
  ));

  expect(dispatch).toBeCalledWith({
    type: 'setRegion',
    payload: { regions: [] },
  });

  expect((queryByText('서울'))).toBeNull();
});
