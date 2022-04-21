import { render } from '@testing-library/react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regionList: [
      {
        id: 1, name: '포항',
      },
    ],
    categories: [
      {
        id: 1, name: '일식',
      },
    ],
  }));

  const { container } = render(
    <App />,
  );
  expect(dispatch).toBeCalledTimes(2);
});
