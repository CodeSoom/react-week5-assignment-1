import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Button from './ButtonItem';

describe('ButtonItem', () => {
  const handleClick = jest.fn();

  function renderButton(checked = false) {
    return render((
      <Button onClick={handleClick} checked={checked}>
        서울
      </Button>
    ));
  }

  it('show name', () => {
    const { getByText } = renderButton();
    expect(getByText('서울')).not.toBeNull();
  });

  context('with checked', () => {
    const { getByText } = renderButton(true);
    expect(getByText('서울(V)')).not.toBeNull();
  });

  it('click', () => {
    const { getByText } = renderButton();
    fireEvent.click(getByText('서울'));

    expect(handleClick).toBeCalled();
  });
});
