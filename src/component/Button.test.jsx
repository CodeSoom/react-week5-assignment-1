import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Button from './Button';

jest.mock('react-redux');

describe('Button', () => {
  useSelector.mockImplementation((selector) => selector({
    regionId: null,
    categorieId: null,
  }));

  const initialState = {
    id: 1,
    name: '서울',
  };

  it('Button render', () => {
    const { getByText } = render(<Button data={initialState} type="region" />);

    expect(getByText('서울')).toBeInTheDocument();
  });

  it('ButtonContainer click check action', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Button onClick={handleClick} data={initialState} type="region" />);

    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();

    // 이벤트 수행 후 스스로 컴포넌트의 내용이 바뀌는건 자동 갱신이 안되나요?
    // expect(getByText('서울(V)')).toBeInTheDocument();
  });
});
