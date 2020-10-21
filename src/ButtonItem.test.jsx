import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Button from './ButtonItem';

test('ButtonItem', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <Button onClick={handleClick} checked={false}>
      서울
    </Button>
  ));

  const button = getByText('서울');
  fireEvent.click(button);

  expect(handleClick).toBeCalled();

  expect(getByText('서울(V)')).not.toBeNull();
});
