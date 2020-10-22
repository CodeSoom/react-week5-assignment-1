import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonsContainer from './ButtonsContainer';

jest.mock('react-redux');

describe('ButtonsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    locations: [{ id: 1, name: '서울' }, { id: 2, name: '대구' }],
    foodTypes: [{ id: 1, name: '한식' }, { id: 2, name: '일식' }],
    selectedButtons: {
      location: '',
      foodType: '',
    },
  }));

  it('버튼이 클릭되면 setSelectInfo action이 dispatch 됩니다.', () => {
    const type = 'location';
    const value = '서울';

    const { getByText } = render(<ButtonsContainer type={type} />);
    const button = getByText(value);

    fireEvent.click(button);
    expect(dispatch).toBeCalledWith({
      type: 'setSelectedButton',
      payload: { type, value },
    });
  });
});
