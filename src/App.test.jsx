import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

test('App', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
    categories: [
      { id: 1, name: '한식' },
    ],
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  }));

  useDispatch.mockImplementation(() => dispatch);

  const { getByText } = render((
    <App />
  ));

  expect(getByText(/Restaurants/)).not.toBeNull();
  expect(getByText('서울')).not.toBeNull();
  expect(getByText('한식')).not.toBeNull();

  expect(dispatch).toBeCalled();
});
