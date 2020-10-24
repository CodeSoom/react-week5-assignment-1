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

  it('버튼이 클릭되면 setSelectButton action이 dispatch 됩니다.', () => {
    const { getByText } = render(<CategoryContainer />);
    const button = getByText('한식');

    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedButton',
      payload: { type: 'category', value: { id: 1, name: '한식' } },
    });
  });
});
