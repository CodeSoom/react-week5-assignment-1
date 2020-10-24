import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoryContainer from './CategoryContainer';

jest.mock('react-redux');

describe('CategoryContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [{ id: 1, name: '한식' }, { id: 2, name: '중식' }],
    selectedButtons: {
      category: '',
    },
  }));

  it('버튼이 클릭되면 setSelectInfo action이 dispatch 됩니다.', () => {
    const type = 'category';
    const value = { id: 1, name: '한식' };

    const { getByText } = render(<CategoryContainer />);
    const button = getByText('한식');

    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedButton',
      payload: { type, value },
    });
  });
});
