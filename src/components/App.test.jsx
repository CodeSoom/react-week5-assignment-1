import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [{
      id: 1,
      name: '두향',
      category: '한식',
      address: '성남시 분당구',
    },
    {
      id: 2,
      name: '맥도날드',
      category: '양식',
      address: '서울시 강남구',
    },
    ],
  }));

  const { getByText, queryByText } = render((
    <App />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  expect(queryByText(/두향 | 한식 | 성남시 분당구/)).not.toBeNull();
  expect(queryByText(/맥도날드 | 양식 | 서울시 강남구/)).not.toBeNull();
});
