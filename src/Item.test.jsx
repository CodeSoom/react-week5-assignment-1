import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const handleClick = jest.fn();

  const itemRender = ({ name }) => render((
    <Item onClick={handleClick} name={name} />
  ));

  it('it listens click event', () => {
    const { getByText } = itemRender({ name: '한식' });
    const button = getByText(/한식/);

    expect(button).not.toBeNull();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
