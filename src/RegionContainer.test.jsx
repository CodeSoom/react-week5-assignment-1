import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionContainer from './RegionContainer';

import { regions, selectedButtons } from '../fixtures/fixture';

jest.mock('react-redux');

describe('RegionContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    selectedButtons,
  }));

  it('"(V)"가 없는 버튼이 클릭되면 setSelectInfo action이 dispatch 호출됩니다.', () => {
    const { getByText } = render(<RegionContainer />);
    const button = getByText('대구');

    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedButton',
      payload: { type: 'region', value: { id: 2, name: '대구' } },
    });
  });

  it('"(V)"가 있는 버튼이 클릭되면 dispatch가 호출되지 않습니다.', () => {
    const { getByText } = render(<RegionContainer />);
    const button = getByText('서울(V)');

    fireEvent.click(button);
    expect(dispatch).not.toBeCalled();
  });
});
