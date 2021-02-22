import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('지역들을 보여준다.', () => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, name: '서울' },
        { id: 2, name: '인천' },
        { id: 3, name: '부산' },
      ],
      selectedRegionID: 1,
    }));
    const { queryByText } = render(<App />);
    expect(queryByText('인천')).toBeInTheDocument();
    expect(queryByText('부산')).toBeInTheDocument();
  });

  it('App 시작시 초기값들을 가져온다.', () => {
    render(<App />);
    expect(dispatch).toBeCalled();
  });
});
