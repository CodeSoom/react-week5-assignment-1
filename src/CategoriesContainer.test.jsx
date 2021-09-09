import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

jest.mock('./services/api');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    checkedCategory: {},
    categories: [
      { id: 1, name: '한식' },
      { id: 2, name: '중식' },
      { id: 3, name: '양식' },
    ],
  }));

  it('카테고리 목록을 보여준다', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('한식')).toBeInTheDocument();
    expect(getByText('중식')).toBeInTheDocument();
    expect(getByText('양식')).toBeInTheDocument();
  });

  it('목록이 클릭되면 체크된 목록으로 변경한다', () => {
    const { getByText } = render((
      <CategoriesContainer />
    ));

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'updateCheckedCategory',
      payload: {
        checkedCategory: {
          id: 1,
          text: '한식',
        },
      },
    });
  });
});
