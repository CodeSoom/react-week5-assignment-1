import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selected: {},
    categories: [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '일식' },
      { id: 4, name: '양식' },
      { id: 5, name: '분식' },
    ],
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
      { id: 4, name: '부산' },
      { id: 5, name: '광주' },
      { id: 6, name: '강원도' },
      { id: 7, name: '인천' },
    ],
  }));

  it('지역이 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    expect(getByText(/서울/)).not.toBeNull();
    expect(getByText(/대전/)).not.toBeNull();
    expect(getByText(/대구/)).not.toBeNull();
    expect(getByText(/부산/)).not.toBeNull();
    expect(getByText(/광주/)).not.toBeNull();
    expect(getByText(/강원도/)).not.toBeNull();
    expect(getByText(/인천/)).not.toBeNull();
  });

  it('카테고리가 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/중식/)).not.toBeNull();
    expect(getByText(/일식/)).not.toBeNull();
    expect(getByText(/양식/)).not.toBeNull();
    expect(getByText(/분식/)).not.toBeNull();
  });
});
