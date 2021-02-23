import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import regions from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('button들을 보여준다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions,
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText(/서울/)).not.toBeNull();
    expect(dispatch).toBeCalled();

    // const categories = [
    //   { id: 1, name: '한식' },
    //   { id: 2, name: '중식' },
    //   { id: 3, name: '일식' },
    //   { id: 4, name: '양식' },
    //   { id: 5, name: '분식' },
    //   { id: 6, name: '과자' },
    //   { id: 7, name: '치킨' },
    //   { id: 1215, name: '아시아식' },
    //   { id: 1216, name: '중동' },
    //   { id: 1217, name: '가정식' },
    //   { id: 1218, name: '3분요리' },
    //   { id: 1231, name: '냉동' },
    // ];

    // categories.forEach((category) => {
    //   const { name } = category;

    // });
  });
});
