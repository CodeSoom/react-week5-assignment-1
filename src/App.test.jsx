import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }],
    categories: [{ id: 11, name: '한식' }],
    restaurants: [
      {
        id: 101,
        name: '마녀식당',
        type: '일식',
        address: '서울시 강남구',
      },
    ],
  }));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('renders list component', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(2);

    expect(queryByText(/서울/)).not.toBeNull();
    expect(queryByText(/한식/)).not.toBeNull();
  });
});
