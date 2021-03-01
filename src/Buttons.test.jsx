import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Buttons from './Buttons';

import { regions } from '../fixtures/restaurants';

describe('Buttons', () => {
  const handleClick = jest.fn();

  function renderButtons(items, id) {
    return render((
      <Buttons
        buttons={items}
        handleClick={handleClick}
        selected={id}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('button들을 보여준다.', () => {
    const { queryByText } = renderButtons(regions);

    regions.forEach((button) => {
      const { name } = button;

      expect(queryByText(name)).not.toBeNull();
    });
  });

  it('버튼을 클릭하면 handleClick함수가 실행된다.', () => {
    const { queryByText } = renderButtons(regions);

    regions.forEach((item) => {
      fireEvent.click(queryByText(item.name));
    });

    expect(handleClick).toBeCalledTimes(regions.length);
  });

  it('선택된 버튼은 버튼명에 (V)가 보여진다.', () => {
    const selected = 1;

    const { queryByText } = renderButtons(regions, selected);

    const { name } = regions.find((item) => item.id === selected);

    expect(queryByText(`${name}(V)`)).not.toBeNull();
  });
});
