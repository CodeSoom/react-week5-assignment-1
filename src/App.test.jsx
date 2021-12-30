import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import App from './App';
import categories from './fixtures/cetegories';
import regions from './fixtures/regions';

jest.mock('react-redux');
const dispatch = jest.fn();

test('App', () => {
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
    regions,
  }));
  const { getByText } = render(<App />);

  expect(dispatch).toBeCalledTimes(2);
  expect(getByText('서울')).not.toBeNull();
  expect(getByText('한식')).not.toBeNull();
  expect(getByText('양천주가')).not.toBeNull();
});
