import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Category', () => {
  const handleClick = jest.fn();

  const categoryRender = ({ name }) => render((
    <Item onClick={handleClick} name={name} />
  ));

  it('버튼 클릭 시 onClick 핸들러가 실행된다.', () => {
    const { getByText } = categoryRender({ name: '한식' });
    const button = getByText(/한식/);

    expect(button).not.toBeNull();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
