import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories: [{ id: 1, name: '한식' }],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders categories', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText('한식')).not.toBeNull();
  });

  it('listens category button click event', () => {
    const { getByText, queryByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'clickCategory',
      payload: {
        id: 1,
      },
    });

    // 클릭했을때 (V)가 붙는지를 확인하는 것은 해당컴포넌트의 관심사가 아닌가요???
    // 컨테이너 컴포넌트는 리덕스와 연결되어 상태를 관리하기때문에 상태값에 따라 변화되는 것을
    // 확인할 수 있는지 알았습니다...
    expect(queryByText('한식(V)')).not.toBeNull();
  });
});
