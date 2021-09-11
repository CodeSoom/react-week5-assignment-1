import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Restaurants/)).not.toBeNull();

  expect(dispatch).toBeCalled();
});
