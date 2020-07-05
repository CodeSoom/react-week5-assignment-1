import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ButtonList from './ButtonList';

const handleClick = jest.fn();
const elements = [1, 2, 3, 4, 5].map((i) => ({ id: i, name: `Button ${i}` }));

function renderButtonList() {
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
  expect(buttons).toHaveLength(elements.length);
});

test('click button', () => {
  // when
  const { buttons } = renderButtonList();
  fireEvent.click(buttons[0]);
  // then
  expect(handleClick).toBeCalledWith(elements[0].id);
});
