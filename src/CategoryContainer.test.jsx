import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryContainer from './CategoryContainer';

import { categories, selectedButtons } from '../fixtures/fixture';

jest.mock('react-redux');

describe('CategoryContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
    selectedButtons,
  }));

  it('"(V)"가 없는 버튼이 클릭되면 setSelectInfo action이 dispatch 호출됩니다.', () => {
    const { getByText } = render(<CategoryContainer />);
    const button = getByText('일식');

    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedButton',
      payload: { type: 'category', value: { id: 2, name: '일식' } },
    });
  });

  it('"(V)"가 있는 버튼이 클릭되면 dispatch가 호출되지 않습니다.', () => {
    const { getByText } = render(<CategoryContainer />);
    const button = getByText('한식(V)');

    fireEvent.click(button);
    expect(dispatch).not.toBeCalled();
  });
});
