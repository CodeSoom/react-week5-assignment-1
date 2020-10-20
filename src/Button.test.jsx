import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const handleClick = jest.fn();
  const { getByText } = render((
    <Button
      label="서울"
      onClick={handleClick}
    />
  ));

  const button = getByText('서울');
  fireEvent.click(button);

  expect(handleClick).toBeCalled();
  expect(button.nodeValue).toBe('서울(V)');
});
