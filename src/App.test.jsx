import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  expect((getByText('서울'))).not.toBeNull();

  expect((getByText('한식'))).not.toBeNull();
});
