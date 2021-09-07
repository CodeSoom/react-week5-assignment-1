import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  const { getByText } = render(<App />);

  expect(getByText('한식')).not.toBeUndefined();
  expect(getByText('서울')).not.toBeUndefined();
});
