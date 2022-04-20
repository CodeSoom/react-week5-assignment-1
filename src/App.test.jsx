import { render } from '@testing-library/react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import App from './App';

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regionList: [],
  }));

  const { queryByText } = render(
    <App />,
  );
  expect(dispatch).toBeCalledWith({
    type: 'setRegionList',
    payload: { regionList: [] },
  });

  expect(queryByText('한식')).not.toBeNull();
  expect(queryByText('중식')).not.toBeNull();
});
