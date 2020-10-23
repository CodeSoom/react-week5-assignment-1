import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }, { id: 2, name: '대구' }],
    categories: [{ id: 1, name: '한식' }, { id: 2, name: '일식' }],
    restaurants: [{ id: 1, name: '밀면' }],
    selectedButtons: {
      region: '',
      category: '',
    },
  }));

  it('컴포넌트가 생성되면 intializeSelectButtons action이 dispatch 됩니다.', () => {
    const regions = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }, { id: 3, name: '대구' }, { id: 4, name: '부산' }, { id: 5, name: '광주' }, { id: 6, name: '강원도' }, { id: 7, name: '인천' }];
    const categories = [{ id: 1, name: '한식' }, { id: 2, name: '중식' }, { id: 3, name: '일식' }, { id: 4, name: '양식' }, { id: 5, name: '분식' }, { id: 6, name: '과자' }, { id: 7, name: '치킨' }];

    render(<App />);

    expect(dispatch).toBeCalledWith({
      type: 'intializeSelectButtons',
      payload: { regions, categories },
    });
  });
});
