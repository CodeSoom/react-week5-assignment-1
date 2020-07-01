import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ButtonList from './ButtonList';

test('renders button list', () => {
  // given
  const elements = [1, 2, 3, 4, 5].map((i) => ({ id: i, name: `Button ${i}` }));
  // when
  render(<ButtonList
    elements={elements}
    onClick={jest.fn()}
  />);
  // then
  expect(screen.queryAllByRole('button')).toHaveLength(5);
});

test('click button', () => {
  // given
  const elements = [1, 2, 3, 4, 5].map((i) => ({ id: i, name: `Button ${i}` }));
  const handleClick = jest.fn();
  // when
  render(<ButtonList
    elements={elements}
    onClick={handleClick}
  />);
  const button = screen.getByText('Button 1');
  fireEvent.click(button);
  // then
  expect(handleClick).toBeCalledWith(1);
});
