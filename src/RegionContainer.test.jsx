import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [{ id: 1, name: '서울' }, { id: 2, name: '대구' }],
    selectedButtons: {
      region: '',
    },
  }));

  it('버튼이 클릭되면 setSelectInfo action이 dispatch 됩니다.', () => {
    const type = 'region';
    const value = '서울';

    const { getByText } = render(<RegionContainer />);
    const button = getByText(value);

    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedButton',
      payload: { type, value },
    });
  });
});
