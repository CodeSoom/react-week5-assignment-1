import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesButton from './CategoriesButton';

jest.mock('react-redux');

describe('CategoriesButton', () => {
  useSelector.mockImplementation((selector) => selector({
    categorieId: null,
  }));

  const initialState = {
    id: 1,
    name: '한식',
  };

  it('CategoriesButton render', () => {
    const { getByText } = render(<CategoriesButton data={initialState} />);

    expect(getByText('한식')).toBeInTheDocument();
  });

  it('CategoriesButton click check action', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<CategoriesButton onClick={handleClick} data={initialState} />);

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();

    // 이벤트 수행 후 스스로 컴포넌트의 내용이 바뀌는건 자동 갱신이 안되나요?
    // expect(getByText('서울(V)')).toBeInTheDocument();
  });
});
