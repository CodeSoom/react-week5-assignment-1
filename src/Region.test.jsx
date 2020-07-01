import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Region from './Region';

test('Region', () => {
  const name = '부산';

  const clickHandler = jest.fn();

  const { getByText } = render((
    <Region name={name} onClick={clickHandler} />
  ));

  expect(getByText('부산')).not.toBeNull();

  fireEvent.click(getByText('부산'));
  expect(clickHandler).toBeCalled();
});
