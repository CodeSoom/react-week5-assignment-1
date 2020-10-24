import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClick = jest.fn();

  const itemRender = ({ name, check }) => render((
    <Item onClick={handleClick} name={name} check={check} />
  ));

  context('with selected', () => {
    it('checked name status listens click event', () => {
      const { getByText } = itemRender({ name: '한식', check: true });
      const button = getByText('한식(V)');

      expect(button).not.toBeNull();

      expect(handleClick).not.toBeCalled();

      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  context('without selected', () => {
    it('it listens click event', () => {
      const { getByText } = itemRender({ name: '한식', check: false });
      const button = getByText(/한식/);

      expect(button).not.toBeNull();

      expect(handleClick).not.toBeCalled();

      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
