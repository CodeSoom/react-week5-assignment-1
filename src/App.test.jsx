import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurants: [
        {
          id: 1,
          categoryId: 1,
          name: '양천주가',
          address: '서울 강남구 123456',
          information: '양천주가 in 서울 강남구 123456',
        },
      ],
    }));
  });

  it('renders', () => {
    const { container } = render(<App />);

    expect(container).not.toBeNull();
  });
});
