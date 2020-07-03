import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ButtonList from './ButtonList';

const handleClick = jest.fn();

function renderButtonList() {
  const elements = [1, 2, 3, 4, 5].map((i) => ({ id: i, name: `Button ${i}` }));
  render(
    <ButtonList
      elements={elements}
      onClick={handleClick}
    />,
  );
  return {
    buttons: screen.queryAllByRole('button'),
  };
}

beforeEach(() => {
  handleClick.mockClear();
});

test('renders button list', () => {
  // when
  const { buttons } = renderButtonList();
  // then
  expect(buttons).toHaveLength(5);
});

test('click button', () => {
  const { buttons } = renderButtonList();
  // then
  const button = buttons[0];
  fireEvent.click(button);
  // then
  expect(handleClick).toBeCalledWith(1);
});
