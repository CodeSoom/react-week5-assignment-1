import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Buttons from './Buttons';

import { regions } from '../fixtures/restaurants';

describe('Buttons', () => {
  const handleClick = jest.fn();
  const items = regions;

  it('button들을 보여준다.', () => {
    const { queryByText } = render((
      <Buttons buttons={items} />
    ));

    items.forEach((button) => {
      const { name } = button;

      expect(queryByText(name)).not.toBeNull();
    });
  });

  it('버튼을 클릭하면 handleClick함수가 실행된다.', () => {
    const { queryByText } = render((
      <Buttons
        buttons={items}
        handleClick={handleClick}
      />
    ));

    items.forEach((item) => {
      fireEvent.click(queryByText(item.name));
    });

    expect(handleClick).toBeCalledTimes(items.length);
  });
});
